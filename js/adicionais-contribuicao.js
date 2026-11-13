(function (root) {
  const prices = Object.freeze({
    coracoes5: 590,
    coracoes10: 1050,
    oxigenio20: 2090,
    fraldas: 3190,
    oxigenio50: 4090,
  });
  const maxAmount = 35000;

  function calculateTotal(contribution, additions) {
    if (!Number.isSafeInteger(contribution) || contribution <= 0 ||
        !Array.isArray(additions) || additions.length > Object.keys(prices).length ||
        new Set(additions).size !== additions.length ||
        additions.some((id) => typeof id !== "string" ||
          !Object.prototype.hasOwnProperty.call(prices, id))) return null;
    const total = contribution + additions.reduce((sum, id) => sum + prices[id], 0);
    return Number.isSafeInteger(total) ? total : null;
  }

  const config = { prices, maxAmount, calculateTotal };
  if (typeof module !== "undefined" && module.exports) module.exports = config;
  else root.contributionAdditions = config;
})(globalThis);
