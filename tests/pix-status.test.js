const test = require("node:test");
const assert = require("node:assert/strict");
const handler = require("../api/pix-status");
const { createToken } = require("../lib/pix-status-token");

async function request(token, options = {}) {
  const res = {
    headers: {},
    setHeader(key, value) { this.headers[key] = value; },
    status(code) { this.statusCode = code; return this; },
    json(value) { this.body = value; return this; },
  };
  await handler({
    method: options.method || "POST",
    headers: {
      host: "localhost:3000",
      origin: options.origin || "http://localhost:3000",
      "content-type": options.contentType || "application/json",
    },
    body: { token },
  }, res);
  return res;
}

test("consulta apenas a transação assinada e confirma somente o status PAID", async () => {
  process.env.HORIZON_API_KEY = "test-key";
  const originalFetch = global.fetch;
  const token = createToken("transacao-123", 950, "test-key");
  let gatewayStatus = "PENDING";
  let gatewayId = "transacao-123";
  let gatewayAmount = 950;
  let calls = 0;
  global.fetch = async (url, options) => {
    calls++;
    assert.equal(url, "https://app.horizonpags.com/api/v1/transactions/transacao-123");
    assert.equal(options.headers["x-api-key"], "test-key");
    return { ok: true, json: async () => ({
      id: gatewayId, amountCents: gatewayAmount, status: gatewayStatus,
      customer: { document: "example" }, pix: { code: "secret" },
    }) };
  };
  try {
    let response = await request(token);
    assert.deepEqual(response.body, { status: "pending" });
    gatewayStatus = "PAID";
    response = await request(token);
    assert.deepEqual(response.body, { status: "paid" });
    gatewayStatus = "EXPIRED";
    assert.deepEqual((await request(token)).body, { status: "closed" });
    gatewayStatus = "UNKNOWN";
    assert.equal((await request(token)).statusCode, 502);
    gatewayStatus = "PAID";
    gatewayAmount = 951;
    assert.equal((await request(token)).statusCode, 502);
    gatewayAmount = 950;
    gatewayId = "outra-transacao";
    assert.equal((await request(token)).statusCode, 502);
    const callsBefore = calls;
    const [payload, signature] = token.split(".");
    const changed = Buffer.from(JSON.stringify({ id: "outra", amount: 950, issuedAt: Date.now() })).toString("base64url");
    assert.equal((await request(`${changed}.${signature}`)).statusCode, 400);
    assert.equal((await request(`${payload}.invalid`)).statusCode, 400);
    assert.equal((await request(token, { origin: "https://other.example" })).statusCode, 403);
    assert.equal(calls, callsBefore);
    global.fetch = async () => { throw new Error("offline"); };
    assert.equal((await request(token)).statusCode, 502);
  } finally {
    global.fetch = originalFetch;
    delete process.env.HORIZON_API_KEY;
  }
});

test("rejeita acompanhamento expirado e identificadores inválidos", async () => {
  process.env.HORIZON_API_KEY = "test-key";
  const now = Date.now;
  try {
    const token = createToken("transacao-123", 1000, "test-key");
    assert.equal(createToken("../outra", 1000, "test-key"), null);
    Date.now = () => now() + 24 * 60 * 60 * 1000 + 1;
    assert.equal((await request(token)).statusCode, 400);
  } finally {
    Date.now = now;
    delete process.env.HORIZON_API_KEY;
  }
});
