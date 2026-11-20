const { randomUUID } = require("node:crypto");
const { validCpf } = require("../js/validacao-contribuicao");
const { calculateBundleTotal, maxAmount } = require("../js/adicionais-contribuicao");

const trackingKeys = {
  utm_source: "source", utm_medium: "medium", utm_campaign: "campaign",
  utm_content: "content", utm_term: "term", src: "src", sck: "sck",
};
const gatewayUrl = "https://app.horizonpags.com/api/v1/transactions";

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
  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return respond(res, 400, "Dados da contribuição inválidos.");
  }

  const { customer, contribution, bundleChecked, tracking } = body;
  if (!customer || typeof customer !== "object" || Array.isArray(customer) ||
      typeof customer.name !== "string" || customer.name.trim().length < 3 || customer.name.trim().length > 150 ||
      typeof customer.email !== "string" || customer.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email) ||
      typeof customer.document !== "string" || !validCpf(customer.document) ||
      typeof customer.phone !== "string" || !/^\d{10,11}$/.test(customer.phone) ||
      !Number.isSafeInteger(contribution) || contribution <= 0) {
    return respond(res, 400, "Confira nome, CPF, telefone, e-mail e valor da contribuição.");
  }
  const amount = calculateBundleTotal(contribution, bundleChecked);
  if (amount !== null && amount < 100) {
    return respond(res, 400, "O valor total do Pix deve ser de pelo menos R$ 1,00.");
  }
  if (amount === null || amount > maxAmount) {
    return respond(res, 400, "Confira a opção Turbine: o total do Pix deve ser de até R$ 350,00.");
  }

  if (tracking !== undefined && (!tracking || typeof tracking !== "object" || Array.isArray(tracking))) {
    return respond(res, 400, "Parâmetros de campanha inválidos.");
  }
  const cleanTracking = {};
  for (const [key, gatewayKey] of Object.entries(trackingKeys)) {
    if (tracking && tracking[key] !== undefined) {
      if (typeof tracking[key] !== "string" || tracking[key].length > 500) {
        return respond(res, 400, "Parâmetros de campanha inválidos.");
      }
      if (tracking[key]) cleanTracking[gatewayKey] = tracking[key];
    }
  }

  const apiKey = process.env.HORIZON_API_KEY;
  if (!apiKey) return respond(res, 503, "O pagamento Pix ainda não foi configurado.");

  const payload = {
    amountCents: amount,
    description: bundleChecked
      ? "Ebook Menino Tobias - Turbine"
      : "Ebook Menino Tobias",
    externalRef: randomUUID(),
    customer: {
      name: customer.name.trim(),
      email: customer.email.trim(),
      document: customer.document,
      phone: customer.phone,
    },
    utm: cleanTracking,
  };

  let response;
  let result;
  try {
    response = await fetch(gatewayUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "Idempotency-Key": randomUUID(),
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(20000),
    });
    result = await response.json();
  } catch {
    return respond(res, 502, "Não foi possível confirmar a geração do Pix. Verifique no painel antes de tentar novamente.");
  }

  if (!response.ok || !result || result.status !== "PENDING" ||
      !result.pix || typeof result.pix.code !== "string" || !result.pix.code ||
      result.amountCents !== amount) {
    return respond(res, 502, "A Horizon não confirmou a geração do Pix. Verifique no painel antes de tentar novamente.");
  }
  const qrImage = typeof result.pix.qrCodeDataUrl === "string" &&
    /^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(result.pix.qrCodeDataUrl) &&
    result.pix.qrCodeDataUrl.length <= 1000000 ? result.pix.qrCodeDataUrl : null;
  return res.status(200).json({ code: result.pix.code, qrImage, amount });
};
