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
  const additions = document.querySelectorAll('input[name="additions"]');
  const additionsConfig = window.contributionAdditions;
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src", "sck", "fbclid", "gclid"];

  if (!form || !submit || !validation || !status || !result || !resultAmount ||
      !instructions || !code || !qr || !copy || !copyStatus || !cpf || !phone ||
      !name || !email || !amount || !additionsConfig ||
      additions.length !== Object.keys(additionsConfig.prices).length || !window.contributionValidation) {
    console.error("Não foi possível inicializar o pagamento Pix.");
    return;
  }

  let submitting = false;
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
    if (!result.hidden) {
      result.hidden = true;
      status.textContent = "Os dados foram alterados. Gere outro Pix para a nova contribuição.";
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
    const tracking = {};
    const params = new URLSearchParams(location.search);
    for (const key of keys) {
      if (params.has(key)) tracking[key] = params.get(key);
    }
    const data = {
      customer: {
        name: name.value.trim(),
        email: email.value.trim(),
        document: cpf.value.replace(/\D/g, ""),
        phone: phone.value.replace(/\D/g, ""),
      },
      contribution,
      additions: Array.from(additions).filter((input) => input.checked).map((input) => input.value),
      tracking,
    };

    submitting = true;
    updateSubmitState();
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
      const expectedAmount = additionsConfig.calculateTotal(contribution, data.additions);
      if (typeof body.code !== "string" || !body.code || body.amount !== expectedAmount) {
        status.textContent = "Resposta Pix inválida. Verifique no painel antes de tentar novamente.";
        return;
      }
      code.value = body.code;
      resultAmount.textContent = `Valor do Pix: ${new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL",
      }).format(body.amount / 100)}`;
      qr.hidden = !body.qrImage;
      instructions.textContent = body.qrImage
        ? "Escaneie o QR Code ou copie o código abaixo no aplicativo do seu banco. A geração do código não confirma o pagamento."
        : "A Paradise não forneceu o QR Code. Copie o código abaixo no aplicativo do seu banco. A geração do código não confirma o pagamento.";
      if (body.qrImage) qr.src = body.qrImage;
      else qr.removeAttribute("src");
      copyStatus.textContent = "";
      result.hidden = false;
      status.textContent = "Pix gerado. O pagamento ainda precisa ser realizado.";
      submit.textContent = "Gerar outro Pix";
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
})();
