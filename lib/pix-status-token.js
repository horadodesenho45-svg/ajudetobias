const { createHmac, timingSafeEqual } = require("node:crypto");

const lifetimeMs = 24 * 60 * 60 * 1000;

function signature(payload, key) {
  return createHmac("sha256", key).update("pix-status-v1:").update(payload).digest();
}

function validId(id) {
  return typeof id === "string" && /^[A-Za-z0-9_-]{1,128}$/.test(id);
}

function createToken(id, amount, key) {
  if (!validId(id) || !Number.isSafeInteger(amount) || amount < 100 || amount > 35000) {
    return null;
  }
  const payload = Buffer.from(JSON.stringify({ id, amount, issuedAt: Date.now() })).toString("base64url");
  return `${payload}.${signature(payload, key).toString("base64url")}`;
}

function verifyToken(token, key) {
  if (typeof token !== "string" || token.length > 1024 || !/^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(token)) {
    return null;
  }
  const [payload, encodedSignature] = token.split(".");
  const supplied = Buffer.from(encodedSignature, "base64url");
  const expected = signature(payload, key);
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return null;

  let data;
  try {
    data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  } catch {
    return null;
  }
  if (!data || !validId(data.id) || !Number.isSafeInteger(data.amount) ||
      data.amount < 100 || data.amount > 35000 || !Number.isSafeInteger(data.issuedAt) ||
      data.issuedAt > Date.now() || Date.now() - data.issuedAt > lifetimeMs) return null;
  return data;
}

module.exports = { createToken, verifyToken };
