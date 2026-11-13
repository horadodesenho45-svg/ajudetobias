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

  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function validate(showEmptyError) {
    const text = amount.value.trim();
    const match = /^(\d+)(?:[,.](\d{1,2}))?$/.exec(text);
    const cents = match
      ? Number(match[1]) * 100 + Number((match[2] || "").padEnd(2, "0"))
      : NaN;
    const valid = Number.isSafeInteger(cents) && cents > 0 &&
      Number.isSafeInteger(cents + 590);
    const value = cents / 100;
    const message = valid
      ? ""
      : "Informe um valor maior que zero, com até duas casas decimais.";

    amount.setCustomValidity(message);
    error.textContent = text || showEmptyError ? message : "";
    amount.setAttribute("aria-invalid", error.textContent ? "true" : "false");
    const formattedValue = valid
      ? currency.format(value)
      : text
        ? "—"
        : currency.format(0);
    contributionTotal.textContent = `Contribuição: ${formattedValue}`;
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
        ? currency.format((cents + (fee ? 590 : 0)) / 100)
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

  bundle.addEventListener("change", () => validate(false));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      amount.value = button.dataset.amount;
      amount.dispatchEvent(new Event("input", { bubbles: true }));
    });
  });
  amount.addEventListener("input", () => validate(false));
  amount.addEventListener("blur", () => validate(true));
  form.addEventListener("reset", () =>
    setTimeout(() => {
      validate(false);
    }, 0),
  );
  validate(false);
})();
