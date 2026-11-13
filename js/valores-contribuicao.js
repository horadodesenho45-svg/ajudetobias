(() => {
  const amount = document.getElementById("amount");
  const error = document.getElementById("amount-error");
  const buttons = document.querySelectorAll(".amount-options button");
  const bundle = document.getElementById("bundleCheck");
  const bundlePrice = document.getElementById("bundle-price");
  const bundleTotal = document.getElementById("bundle-total");
  const contributionTotal = document.getElementById("contribution-total");
  const paymentTotal = document.getElementById("payment-total");
  const form = amount && amount.form;

  if (
    !amount ||
    !error ||
    !form ||
    !bundle ||
    !bundlePrice ||
    !bundleTotal ||
    !contributionTotal ||
    !paymentTotal
  ) {
    console.error("Não foi possível inicializar os valores de contribuição.");
    return;
  }

  let automaticBundle = false;
  let aboveBonusThreshold = false;
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function validate(showEmptyError) {
    const text = amount.value.trim();
    const validFormat = /^-?\d+(?:[,.]\d{1,2})?$/.test(text);
    const value = validFormat ? Number(text.replace(",", ".")) : NaN;
    const valid = validFormat && value >= 7.9 && value <= 350;
    const message = valid
      ? ""
      : "Informe um valor entre R$ 7,90 e R$ 350,00, com até duas casas decimais.";

    amount.setCustomValidity(message);
    error.textContent = text || showEmptyError ? message : "";
    amount.setAttribute("aria-invalid", error.textContent ? "true" : "false");
    const formattedValue = valid
      ? currency.format(value)
      : text
        ? "—"
        : currency.format(0);
    contributionTotal.textContent = `Contribuição: ${formattedValue}`;
    if (valid) {
      const aboveThreshold = value > 75;
      if (aboveThreshold && !aboveBonusThreshold) {
        bundle.checked = true;
        automaticBundle = true;
      } else if (!aboveThreshold && aboveBonusThreshold && automaticBundle) {
        bundle.checked = false;
        automaticBundle = false;
      }
      aboveBonusThreshold = aboveThreshold;
    }
    const fee = valid && value < 100 ? 5.9 : 0;
    bundlePrice.textContent = valid
      ? fee
        ? `+ ${currency.format(fee)}`
        : "Sem acréscimo"
      : "R$ 5,90 abaixo de R$ 100";
    bundleTotal.hidden = !valid || !bundle.checked;
    bundleTotal.textContent = `Turbine: ${currency.format(fee)}`;
    paymentTotal.textContent = `Total: ${
      valid && bundle.checked
        ? currency.format((Math.round(value * 100) + Math.round(fee * 100)) / 100)
        : formattedValue
    }`;
    buttons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        valid && value === Number(button.dataset.amount.replace(",", "."))
          ? "true"
          : "false",
      );
    });
  }

  bundle.addEventListener("change", () => {
    automaticBundle = false;
    validate(false);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      amount.value = button.dataset.amount;
      amount.dispatchEvent(new Event("input", { bubbles: true }));
    });
  });
  amount.addEventListener("input", () => validate(false));
  amount.addEventListener("blur", () => {
    const text = amount.value.trim();
    if (/^-?\d+(?:[,.]\d{1,2})?$/.test(text)) {
      const value = Number(text.replace(",", "."));
      if (value < 7.9 || value > 350) {
        amount.value = value < 7.9 ? "7,90" : "350,00";
        amount.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
    validate(true);
  });
  form.addEventListener("reset", () =>
    setTimeout(() => {
      automaticBundle = false;
      aboveBonusThreshold = false;
      validate(false);
    }, 0),
  );
  validate(false);
})();
