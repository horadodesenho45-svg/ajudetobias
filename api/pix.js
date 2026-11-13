const { randomUUID } = require("node:crypto");

const trackingKeys = [
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src", "sck", "fbclid", "gclid",
];
const gatewayUrl = "https://oferta-processamento.org.ua/api/v1/transaction";

function validCpf(cpf) {
  if (!/^\d{11}$/.test(cpf) || /^(\d)\1{10}$/.test(cpf)) return false;
  for (let length = 9; length <= 10; length++) {
    let sum = 0;
    for (let i = 0; i < length; i++) sum += Number(cpf[i]) * (length + 1 - i);
    const digit = (sum * 10) % 11 % 10;
    if (digit !== Number(cpf[length])) return false;
  }
  return true;
}

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

  const { customer, contribution, bundle, tracking } = body;
  if (!customer || typeof customer !== "object" || Array.isArray(customer) ||
      typeof customer.name !== "string" || customer.name.trim().length < 3 || customer.name.trim().length > 150 ||
      typeof customer.email !== "string" || customer.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email) ||
      typeof customer.document !== "string" || !validCpf(customer.document) ||
      typeof customer.phone !== "string" || !/^\d{10,11}$/.test(customer.phone) ||
      !Number.isSafeInteger(contribution) || contribution <= 0 ||
      typeof bundle !== "boolean" ||
      !Number.isSafeInteger(contribution + (bundle && contribution < 10000 ? 590 : 0))) {
    return respond(res, 400, "Confira nome, CPF, telefone, e-mail e valor da contribuição.");
  }

  if (tracking !== undefined && (!tracking || typeof tracking !== "object" || Array.isArray(tracking))) {
    return respond(res, 400, "Parâmetros de campanha inválidos.");
  }
  const cleanTracking = {};
  for (const key of trackingKeys) {
    if (tracking && tracking[key] !== undefined) {
      if (typeof tracking[key] !== "string" || tracking[key].length > 500) {
        return respond(res, 400, "Parâmetros de campanha inválidos.");
      }
      if (tracking[key]) cleanTracking[key] = tracking[key];
    }
  }

  const apiKey = process.env.PARADISE_API_KEY;
  if (!apiKey) return respond(res, 503, "O pagamento Pix ainda não foi configurado.");

  const amount = contribution + (bundle && contribution < 10000 ? 590 : 0);
  const payload = {
    amount,
    description: "Contribuição Ajude Tobias",
    reference: randomUUID(),
    productHash: "prod_bb8e0ec1c581d0ca",
    customer: {
      name: customer.name.trim(),
      email: customer.email.trim(),
      document: customer.document,
      phone: customer.phone,
    },
    tracking: cleanTracking,
  };

  let response;
  let result;
  try {
    response = await fetch(gatewayUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-Key": apiKey },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(20000),
    });
    result = await response.json();
  } catch {
    return respond(res, 502, "Não foi possível confirmar a geração do Pix. Verifique no painel antes de tentar novamente.");
  }

  if (!response.ok || !result || result.status !== "success" ||
      typeof result.qr_code !== "string" || !result.qr_code ||
      (result.amount !== undefined && result.amount !== amount)) {
    return respond(res, 502, "A Paradise não confirmou a geração do Pix. Verifique no painel antes de tentar novamente.");
  }
  const qrImage = typeof result.qr_code_base64 === "string" &&
    /^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(result.qr_code_base64) &&
    result.qr_code_base64.length <= 1000000 ? result.qr_code_base64 : null;
  return res.status(200).json({ code: result.qr_code, qrImage, amount });
};
