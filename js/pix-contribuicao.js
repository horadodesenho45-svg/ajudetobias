(() => {
  const form = document.getElementById("contribution-form");
  const submit = document.getElementById("pix-submit");
  const validation = document.getElementById("pix-validation");
  const status = document.getElementById("pix-status");
  const result = document.getElementById("pix-result");
  const resultAmount = document.getElementById("pix-result-amount");
  const instructions = document.getElementById("pix-instructions");
  const code = document.getElementById("pix-code");
  const qr = document.getElementById("pix-qr");
  const copy = document.getElementById("pix-copy");
  const copyStatus = document.getElementById("pix-copy-status");
  const cpf = document.getElementById("payerDocument");
  const phone = document.getElementById("payerPhone");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const amount = document.getElementById("amount");
  const bundle = document.getElementById("bundleCheck");
  const additionsConfig = window.contributionAdditions;

  if (!form || !submit || !validation || !status || !result || !resultAmount ||
      !instructions || !code || !qr || !copy || !copyStatus || !cpf || !phone ||
      !name || !email || !amount || !bundle || !additionsConfig || !window.contributionValidation) {
    console.error("Não foi possível inicializar o pagamento Pix.");
    return;
  }

  let submitting = false;
  let storedCustomerMayExist = true;
  let activeMonitor = null;
  let pollTimer = null;
  const pendingKey = "tobias-pix-pending";

  function stopMonitoring() {
    activeMonitor = null;
    clearTimeout(pollTimer);
    try {
      sessionStorage.removeItem(pendingKey);
      return true;
    } catch {
      return false;
    }
  }

  function displayPix(payment) {
    code.value = payment.code;
    resultAmount.textContent = `Valor do Pix: ${new Intl.NumberFormat("pt-BR", {
      style: "currency", currency: "BRL",
    }).format(payment.amount / 100)}`;
    qr.hidden = !payment.qrImage;
    instructions.textContent = payment.qrImage
      ? "Escaneie o QR Code ou copie o código abaixo no aplicativo do seu banco. A geração do código não confirma o pagamento."
      : "A Horizon não forneceu o QR Code. Copie o código abaixo no aplicativo do seu banco. A geração do código não confirma o pagamento.";
    if (payment.qrImage) qr.src = payment.qrImage;
    else qr.removeAttribute("src");
    copyStatus.textContent = "";
    result.hidden = false;
    submit.textContent = "Gerar outro Pix";
  }

  function startMonitoring(payment) {
    const monitor = { token: payment.statusToken };
    activeMonitor = monitor;
    async function check() {
      if (activeMonitor !== monitor) return;
      try {
        const response = await fetch("/api/pix-status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: monitor.token }),
        });
        const body = await response.json();
        if (activeMonitor !== monitor) return;
        if (!response.ok) {
          if (response.status >= 400 && response.status < 500 && response.status !== 429) {
            const removed = stopMonitoring();
            status.textContent = (body.error || "Não foi possível acompanhar este Pix.") +
              " Confira o pagamento no painel antes de gerar outro Pix." +
              (removed ? "" : " Não foi possível remover o acompanhamento desta aba.");
            return;
          }
          status.textContent = "Não foi possível consultar o pagamento. Tentaremos novamente; mantenha esta página aberta.";
        } else if (body.status === "paid") {
          stopMonitoring();
          status.textContent = "Pagamento confirmado. Redirecionando...";
          window.location.assign(window.campaignTracking.destination("obrigado.html", window.location.href));
          return;
        } else if (body.status === "closed") {
          const removed = stopMonitoring();
          result.hidden = true;
          status.textContent = "Este Pix não está mais disponível para pagamento. Confira no painel antes de gerar outro." +
            (removed ? "" : " Não foi possível remover o acompanhamento desta aba.");
          return;
        } else if (body.status === "pending") {
          status.textContent = "Aguardando confirmação do pagamento. Mantenha esta página aberta.";
        } else {
          status.textContent = "A consulta retornou uma resposta inválida. Tentaremos novamente; mantenha esta página aberta.";
        }
      } catch {
        if (activeMonitor !== monitor) return;
        status.textContent = "Não foi possível consultar o pagamento. Tentaremos novamente; mantenha esta página aberta.";
      }
      if (activeMonitor === monitor) pollTimer = setTimeout(check, 10000);
    }
    pollTimer = setTimeout(check, 10000);
  }

  function restorePending() {
    try {
      const saved = sessionStorage.getItem(pendingKey);
      if (!saved) return;
      const payment = JSON.parse(saved);
      if (!payment || typeof payment.statusToken !== "string" || !payment.statusToken ||
          typeof payment.code !== "string" || !payment.code ||
          !Number.isSafeInteger(payment.amount) || payment.amount < 100 || payment.amount > 35000 ||
          (payment.qrImage !== null && (typeof payment.qrImage !== "string" ||
            payment.qrImage.length > 1000000 ||
            !/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(payment.qrImage)))) {
        sessionStorage.removeItem(pendingKey);
        status.textContent = "Não foi possível recuperar o Pix anterior. Confira o pagamento no painel.";
        return;
      }
      displayPix(payment);
      status.textContent = "Aguardando confirmação do pagamento. Mantenha esta página aberta.";
      startMonitoring(payment);
    } catch {
      status.textContent = "Não foi possível recuperar o Pix anterior. Confira o pagamento no painel.";
    }
  }
  function updateSubmitState() {
    const digits = cpf.value.replace(/\D/g, "");
    const phoneDigits = phone.value.replace(/\D/g, "");
    const nameValid = name.value.trim().length >= 3;
    const cpfValid = window.contributionValidation.validCpf(digits);
    const phoneValid = /^\d{10,11}$/.test(phoneDigits);
    const emailValid = email.validity.valid && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    const ready = nameValid && cpfValid && phoneValid && emailValid && amount.validity.valid;
    submit.disabled = submitting || !ready;
    if (ready) {
      validation.textContent = "";
    } else if (digits.length === 11 && !cpfValid) {
      validation.textContent = "Confira o CPF informado.";
    } else {
      validation.textContent = "Preencha nome, CPF válido, telefone com DDD, e-mail e valor para contribuir.";
    }
  }

  function invalidateResult() {
    let storageError = false;
    if (storedCustomerMayExist && window.pixCustomerSession) {
      try {
        window.pixCustomerSession.clear();
        storedCustomerMayExist = false;
      } catch {
        storageError = true;
      }
    }
    if (!result.hidden) {
      const removed = stopMonitoring();
      result.hidden = true;
      status.textContent = "Os dados foram alterados. Gere outro Pix para a nova contribuição." +
        (removed ? "" : " Não foi possível remover o acompanhamento anterior desta aba.");
    }
    if (storageError) {
      status.textContent += " Não foi possível remover os dados temporários desta aba.";
    }
  }
  form.addEventListener("input", invalidateResult);
  form.addEventListener("input", updateSubmitState);
  form.addEventListener("reset", () => setTimeout(updateSubmitState, 0));

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    updateSubmitState();
    if (submit.disabled || !form.reportValidity()) return;
    const match = /^(\d+)(?:[,.](\d{1,2}))?$/.exec(amount.value.trim());
    if (!match) return;
    const contribution = Number(match[1]) * 100 + Number((match[2] || "").padEnd(2, "0"));
    const tracking = window.campaignTracking.fromSearch(location.search);
    const data = {
      customer: {
        name: name.value.trim(),
        email: email.value.trim(),
        document: cpf.value.replace(/\D/g, ""),
        phone: phone.value.replace(/\D/g, ""),
      },
      contribution,
      bundleChecked: bundle.checked,
      tracking,
    };

    submitting = true;
    updateSubmitState();
    const pendingRemoved = stopMonitoring();
    const controls = Array.from(form.querySelectorAll("input, textarea, .amount-options button"))
      .filter((control) => !control.disabled);
    controls.forEach((control) => { control.disabled = true; });
    result.hidden = true;
    status.textContent = "Gerando Pix. Aguarde...";
    try {
      const response = await fetch("/api/pix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await response.json();
      if (!response.ok) {
        status.textContent = body.error || "Não foi possível gerar o Pix. Verifique no painel antes de tentar novamente.";
        return;
      }
      const expectedAmount = additionsConfig.calculateBundleTotal(contribution, data.bundleChecked);
      if (typeof body.code !== "string" || !body.code || body.amount !== expectedAmount ||
          typeof body.statusToken !== "string" || !body.statusToken) {
        status.textContent = "Resposta Pix inválida. Verifique no painel antes de tentar novamente.";
        return;
      }
      const payment = { code: body.code, qrImage: body.qrImage, amount: body.amount, statusToken: body.statusToken };
      displayPix(payment);
      status.textContent = "Pix gerado. Aguardando confirmação do pagamento; mantenha esta página aberta.";
      try {
        sessionStorage.setItem(pendingKey, JSON.stringify(payment));
      } catch {
        status.textContent += " O acompanhamento não poderá ser recuperado ao recarregar a página.";
      }
      if (!pendingRemoved) {
        status.textContent += " Não foi possível remover o acompanhamento anterior desta aba.";
      }
      try {
        if (!window.pixCustomerSession) throw new Error("Armazenamento temporário indisponível.");
        window.pixCustomerSession.save(data.customer);
        storedCustomerMayExist = true;
      } catch {
        status.textContent += " Não foi possível guardar seus dados nesta aba; preencha-os novamente para comprar corações.";
      }
      startMonitoring(payment);
    } catch {
      status.textContent = "Não foi possível confirmar a geração do Pix. Verifique no painel antes de tentar novamente.";
    } finally {
      controls.forEach((control) => { control.disabled = false; });
      submitting = false;
      updateSubmitState();
    }
  });

  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.value);
      copyStatus.textContent = "Código copiado!";
    } catch {
      code.focus();
      code.select();
      copyStatus.textContent = "Selecione e copie o código acima.";
    }
  });
  updateSubmitState();
  restorePending();
})();
