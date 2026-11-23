(function (root) {
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src", "sck", "fbclid", "gclid"];

  function fromSearch(search) {
    const params = new URLSearchParams(search);
    const tracking = {};
    for (const key of keys) {
      const value = params.get(key);
      if (value) tracking[key] = value;
    }
    return tracking;
  }

  function destination(path, currentUrl) {
    const current = new URL(currentUrl);
    const url = new URL(path, current);
    for (const [key, value] of Object.entries(fromSearch(current.search))) {
      url.searchParams.set(key, value);
    }
    return url.href;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { fromSearch, destination };
  } else {
    root.campaignTracking = { fromSearch, destination };
  }
})(globalThis);
