const { verifyToken } = require("../lib/pix-status-token");

function respond(res, status, message) {
  return res.status(status).json({ error: message });
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return respond(res, 405, "Método não permitido.");
  }
  let origin;
  try {
    origin = new URL(req.headers.origin);
  } catch {
    return respond(res, 403, "Origem da requisição inválida.");
  }
  if (origin.host !== req.headers.host || !/^https?:$/.test(origin.protocol)) {
    return respond(res, 403, "Origem da requisição não autorizada.");
  }
  if (!/^application\/json(?:\s*;|$)/i.test(req.headers["content-type"] || "")) {
    return respond(res, 415, "Envie os dados em JSON.");
  }
  const apiKey = process.env.HORIZON_API_KEY;
  if (!apiKey) return respond(res, 503, "A consulta Pix ainda não foi configurada.");
  const token = req.body && typeof req.body === "object" && !Array.isArray(req.body)
    ? verifyToken(req.body.token, apiKey) : null;
  if (!token) return respond(res, 400, "A consulta Pix é inválida ou expirou.");

  let response;
  let transaction;
  try {
    response = await fetch(`https://app.horizonpags.com/api/v1/transactions/${encodeURIComponent(token.id)}`, {
      headers: { "x-api-key": apiKey },
      signal: AbortSignal.timeout(20000),
    });
    transaction = await response.json();
  } catch {
    return respond(res, 502, "Não foi possível consultar o pagamento na Horizon.");
  }
  if (!response.ok || !transaction || transaction.id !== token.id ||
      transaction.amountCents !== token.amount) {
    return respond(res, 502, "A Horizon não confirmou os dados da transação.");
  }
  if (transaction.status === "PAID") return res.status(200).json({ status: "paid" });
  if (transaction.status === "PENDING") return res.status(200).json({ status: "pending" });
  if (["EXPIRED", "REFUSED", "REFUNDED", "CHARGEBACK"].includes(transaction.status)) {
    return res.status(200).json({ status: "closed" });
  }
  return respond(res, 502, "A Horizon retornou um status de pagamento desconhecido.");
};
