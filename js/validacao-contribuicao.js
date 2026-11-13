(function (root) {
  function validCpf(cpf) {
    if (!/^\d{11}$/.test(cpf) || /^(\d)\1{10}$/.test(cpf)) return false;
    for (let length = 9; length <= 10; length++) {
      let sum = 0;
      for (let i = 0; i < length; i++) sum += Number(cpf[i]) * (length + 1 - i);
      if ((sum * 10) % 11 % 10 !== Number(cpf[length])) return false;
    }
    return true;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { validCpf };
  } else {
    root.contributionValidation = { validCpf };
  }
})(globalThis);
