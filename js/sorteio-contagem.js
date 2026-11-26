(function () {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  function localParts(timestamp) {
    const parts = {};
    for (const part of formatter.formatToParts(timestamp)) {
      if (part.type !== "literal") parts[part.type] = Number(part.value);
    }
    return parts;
  }

  function nextDraw(timestamp) {
    const now = localParts(timestamp);
    const today = Date.UTC(now.year, now.month - 1, now.day);
    let days = (7 - new Date(today).getUTCDay()) % 7;
    if (days === 0 && now.hour >= 18) days = 7;
    const desired = Date.UTC(now.year, now.month - 1, now.day + days, 18);
    let target = desired;
    for (let i = 0; i < 3; i++) {
      const local = localParts(target);
      const represented = Date.UTC(local.year, local.month - 1, local.day, local.hour, local.minute, local.second);
      const correction = desired - represented;
      if (correction === 0) break;
      target += correction;
    }
    return target;
  }

  function formatRemaining(timestamp) {
    let seconds = Math.ceil((nextDraw(timestamp) - timestamp) / 1000);
    const days = Math.floor(seconds / 86400);
    seconds %= 86400;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    const pad = (value) => String(value).padStart(2, "0");
    return `${days}d ${pad(hours)}h ${pad(minutes)}min ${pad(seconds)}s`;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { nextDraw, formatRemaining };
  } else {
    const countdown = document.getElementById("prize-countdown");
    if (!countdown) {
      console.error("Não foi possível inicializar a contagem do sorteio.");
      return;
    }
    const update = () => { countdown.textContent = formatRemaining(Date.now()); };
    update();
    setInterval(update, 1000);
  }
})();
