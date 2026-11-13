(() => {
  const cpf = document.getElementById("payerDocument");
  const phone = document.getElementById("payerPhone");

  if (!cpf || !phone) {
    console.error(
      "Não foi possível inicializar as máscaras de CPF e telefone.",
    );
    return;
  }

  function formatCpf(digits) {
    return digits
      .replace(/^(\d{3})(?=\d)/, "$1.")
      .replace(/^(\d{3})\.(\d{3})(?=\d)/, "$1.$2.")
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(?=\d)/, "$1.$2.$3-");
  }

  function formatPhone(digits) {
    if (!digits) return "";
    if (digits.length <= 2) return `(${digits}`;
    const area = digits.slice(0, 2);
    const number = digits.slice(2);
    const prefixLength = number.length > 8 ? 5 : 4;
    return `(${area}) ${number.slice(0, prefixLength)}${
      number.length > prefixLength ? `-${number.slice(prefixLength)}` : ""
    }`;
  }

  function attachMask(input, maxDigits, format) {
    let deletionAtSeparator = null;
    input.addEventListener("beforeinput", (event) => {
      const start = input.selectionStart;
      const end = input.selectionEnd;
      deletionAtSeparator = null;
      if (start === null || start !== end) return;
      if (
        event.inputType === "deleteContentBackward" &&
        start > 0 &&
        /\D/.test(input.value[start - 1])
      ) {
        deletionAtSeparator = { direction: -1, index: start - 1 };
      } else if (
        event.inputType === "deleteContentForward" &&
        start < input.value.length &&
        /\D/.test(input.value[start])
      ) {
        deletionAtSeparator = { direction: 1, index: start };
      }
    });
    input.addEventListener("input", () => {
      let original = input.value;
      let caret = input.selectionStart ?? original.length;
      if (deletionAtSeparator) {
        let index = deletionAtSeparator.index;
        const direction = deletionAtSeparator.direction;
        if (direction < 0) index--;
        while (
          index >= 0 &&
          index < original.length &&
          /\D/.test(original[index])
        ) {
          index += direction;
        }
        if (index >= 0 && index < original.length) {
          original = original.slice(0, index) + original.slice(index + 1);
          if (index < caret) caret--;
        }
        deletionAtSeparator = null;
      }
      const digitsBeforeCaret = original
        .slice(0, caret)
        .replace(/\D/g, "").length;
      const digits = original.replace(/\D/g, "").slice(0, maxDigits);
      const formatted = format(digits);
      input.value = formatted;
      let position = 0;
      let count = 0;
      while (position < formatted.length && count < digitsBeforeCaret) {
        if (/\d/.test(formatted[position])) count++;
        position++;
      }
      if (caret === original.length) position = formatted.length;
      input.setSelectionRange(position, position);
    });
  }

  attachMask(cpf, 11, formatCpf);
  attachMask(phone, 11, formatPhone);
})();
