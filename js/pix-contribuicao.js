(() => {
  const form = document.getElementById("contribution-form");
  const submit = document.getElementById("pix-submit");
  const status = document.getElementById("pix-status");
  const result = document.getElementById("pix-result");
  const resultAmount = document.getElementById("pix-result-amount");
  const code = document.getElementById("pix-code");
  const qr = document.getElementById("pix-qr");
  const copy = document.getElementById("pix-copy");
  const copyStatus = document.getElementById("pix-copy-status");
  const cpf = document.getElementById("payerDocument");
  const phone = document.getElementById("payerPhone");
  const amount = document.getElementById("amount");
  const bundle = document.getElementById("bundleCheck");
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src", "sck", "fbclid", "gclid"];

  if (!form || !submit || !status || !result || !resultAmount || !code || !qr || !copy ||
      !copyStatus || !cpf || !phone || !amount || !bundle) {
    console.error("Não foi possível inicializar o pagamento Pix.");
    return;
  }

  function invalidateResult() {
    if (!result.hidden) {
      result.hidden = true;
      status.textContent = "Os dados foram alterados. Gere outro Pix para a nova contribuição.";
    }
  }
  form.addEventListener("input", invalidateResult);
  bundle.addEventListener("change", invalidateResult);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity() || submit.disabled) return;
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
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        document: cpf.value.replace(/\D/g, ""),
        phone: phone.value.replace(/\D/g, ""),
      },
      contribution,
      bundle: bundle.checked,
      tracking,
    };

    submit.disabled = true;
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
      const expectedAmount = contribution + (data.bundle && contribution < 10000 ? 590 : 0);
      if (typeof body.code !== "string" || !body.code || body.amount !== expectedAmount) {
        status.textContent = "Resposta Pix inválida. Verifique no painel antes de tentar novamente.";
        return;
      }
      code.value = body.code;
      resultAmount.textContent = `Valor do Pix: ${new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL",
      }).format(body.amount / 100)}`;
      qr.hidden = !body.qrImage;
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
      submit.disabled = false;
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
  submit.disabled = false;
})();
