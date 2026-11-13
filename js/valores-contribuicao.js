(() => {
  const amount = document.getElementById("amount");
  const error = document.getElementById("amount-error");
  const buttons = document.querySelectorAll(".amount-options button");
  const additionsSection = document.getElementById("contribution-additions");
  const additions = document.querySelectorAll('input[name="additions"]');
  const additionsLimit = document.getElementById("additions-limit");
  const additionsTotal = document.getElementById("additions-total");
  const config = window.contributionAdditions;
  const contributionTotal = document.getElementById("contribution-total");
  const paymentTotal = document.getElementById("payment-total");
  const form = amount && amount.form;

  if (
    !amount ||
    !error ||
    !form ||
    !additionsSection ||
    !additionsLimit ||
    !additionsTotal ||
    !config ||
    additions.length !== Object.keys(config.prices).length ||
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
    const validBase = Number.isSafeInteger(cents) && cents > 0;
    const selected = Array.from(additions).filter((input) => input.checked).map((input) => input.value);
    const total = validBase ? config.calculateTotal(cents, selected) : null;
    const valid = total !== null && total <= config.maxAmount;
    const value = cents / 100;
    const message = valid
      ? ""
      : validBase && total !== null
        ? "O total do Pix não pode ultrapassar R$ 350,00. Reduza o valor ou remova adicionais."
        : "Informe um valor maior que zero, com até duas casas decimais.";

    amount.setCustomValidity(message);
    error.textContent = text || showEmptyError ? message : "";
    amount.setAttribute("aria-invalid", error.textContent ? "true" : "false");
    const formattedValue = validBase
      ? currency.format(value)
      : text
        ? "—"
        : currency.format(0);
    contributionTotal.textContent = `Contribuição: ${formattedValue}`;
    additionsSection.hidden = !validBase;
    let available = 0;
    additions.forEach((input) => {
      const option = input.closest("[data-addition-option]");
      const visible = validBase && (input.checked ||
        (total !== null && total + config.prices[input.value] <= config.maxAmount));
      option.hidden = !visible;
      if (visible && !input.checked) available++;
    });
    additionsLimit.textContent = validBase && total === config.maxAmount
      ? "Essa é uma bênção enorme na vida de Tobias. Deus te dará em dobro!"
      : validBase && total > config.maxAmount
      ? "O total ultrapassa R$ 350,00. Remova algum adicional ou reduza o valor."
      : validBase && !available && selected.length === 0
        ? "Nenhum adicional cabe no limite de R$ 350,00 para este valor."
        : "";
    additionsTotal.hidden = !validBase || selected.length === 0;
    additionsTotal.textContent = `Adicionais: ${currency.format((total - cents) / 100)}`;
    paymentTotal.textContent = `Total: ${total !== null ? currency.format(total / 100) : formattedValue}`;
    buttons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        valid && value === Number(button.dataset.amount.replace(",", "."))
          ? "true"
          : "false",
      );
    });
  }

  additions.forEach((input) => input.addEventListener("input", () => validate(false)));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      amount.value = button.dataset.amount;
      amount.dispatchEvent(new Event("input", { bubbles: true }));
    });
  });
  amount.addEventListener("input", () => validate(false));
  amount.addEventListener("blur", () => {
    const match = /^(\d+)(?:[,.](\d{1,2}))?$/.exec(amount.value.trim());
    if (match) {
      amount.value = `${match[1]},${(match[2] || "").padEnd(2, "0")}`;
    }
    validate(true);
  });
  form.addEventListener("reset", () =>
    setTimeout(() => {
      validate(false);
    }, 0),
  );
  validate(false);
})();
