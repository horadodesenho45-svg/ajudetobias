(function (root) {
  const key = "tobias-pix-customer";
  const lifetime = 30 * 60 * 1000;

  function save(customer) {
    sessionStorage.setItem(key, JSON.stringify({ customer, savedAt: Date.now() }));
  }

  function load() {
    const stored = sessionStorage.getItem(key);
    if (!stored) return null;
    const data = JSON.parse(stored);
    if (!data || !Number.isFinite(data.savedAt) ||
        data.savedAt > Date.now() || Date.now() - data.savedAt > lifetime) {
      sessionStorage.removeItem(key);
      return null;
    }
    return data.customer;
  }

  function clear() {
    sessionStorage.removeItem(key);
  }

  root.pixCustomerSession = { save, load, clear };
})(globalThis);
