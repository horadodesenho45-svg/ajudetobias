const test = require("node:test");
const assert = require("node:assert/strict");
const handler = require("../api/pix");

const valid = {
  customer: {
    name: "Pessoa Exemplo",
    email: "exemplo@example.com",
    document: "52998224725",
    phone: "11999999999",
  },
  contribution: 1000,
  bundle: false,
  tracking: {
    utm_source: "teste",
    utm_medium: "cpc",
    utm_campaign: "campanha",
    utm_content: "anuncio",
    utm_term: "busca",
    src: "origem-anuncio",
    sck: "identificador-anuncio",
    fbclid: "clique-meta-exemplo",
    gclid: "clique-google-exemplo",
  },
};

async function request(body, options = {}) {
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
    body,
  }, res);
  return res;
}

test("integração Pix usa centavos, adicional explícito e UTMs", async () => {
  process.env.PARADISE_API_KEY = "test-key";
  const originalFetch = global.fetch;
  const sent = [];
  global.fetch = async (url, options) => {
    const body = JSON.parse(options.body);
    sent.push({ url, options, body });
    return { ok: true, json: async () => ({
      status: "success", qr_code: "pix-exemplo", qr_code_base64: "data:image/png;base64,AAAA", amount: body.amount,
    }) };
  };
  try {
    const plain = await request(valid);
    const extra = await request({ ...valid, contribution: 1000, bundle: true });
    const over100 = await request({ ...valid, contribution: 10000, bundle: true });
    const custom = await request({ ...valid, contribution: 50123, bundle: false });
    assert.deepEqual([plain.body.amount, extra.body.amount, over100.body.amount, custom.body.amount], [1000, 1590, 10000, 50123]);
    assert.equal(plain.statusCode, 200);
    assert.equal(plain.body.code, "pix-exemplo");
    assert.equal(sent[0].options.headers["X-API-Key"], "test-key");
    assert.deepEqual(sent[0].body.tracking, valid.tracking);
    assert.equal(sent[0].body.productHash, "prod_bb8e0ec1c581d0ca");
    assert.equal(sent[0].body.source, undefined);
    assert.notEqual(sent[0].body.reference, sent[1].body.reference);
    assert.equal(JSON.stringify(plain.body).includes("test-key"), false);
    assert.equal(JSON.stringify(plain.body).includes(valid.customer.document), false);
  } finally {
    global.fetch = originalFetch;
    delete process.env.PARADISE_API_KEY;
  }
});

test("tracking ausente é aceito e campos não documentados não são enviados", async () => {
  process.env.PARADISE_API_KEY = "test-key";
  const originalFetch = global.fetch;
  const sent = [];
  global.fetch = async (url, options) => {
    const body = JSON.parse(options.body);
    sent.push(body);
    return { ok: true, json: async () => ({ status: "success", qr_code: "pix", amount: body.amount }) };
  };
  try {
    const withoutTracking = { ...valid };
    delete withoutTracking.tracking;
    assert.equal((await request(withoutTracking)).statusCode, 200);
    assert.deepEqual(sent[0].tracking, {});
    assert.equal((await request({ ...valid, tracking: { src: "anuncio", extra: "ignorado" } })).statusCode, 200);
    assert.deepEqual(sent[1].tracking, { src: "anuncio" });
    assert.equal(sent[1].productHash, "prod_bb8e0ec1c581d0ca");
  } finally {
    global.fetch = originalFetch;
    delete process.env.PARADISE_API_KEY;
  }
});

test("rejeita dados inválidos, origem externa e configuração ausente", async () => {
  assert.equal((await request(valid, { origin: "https://outra.example" })).statusCode, 403);
  assert.equal((await request(valid, { contentType: "text/plain" })).statusCode, 415);
  assert.equal((await request({ ...valid, customer: { ...valid.customer, document: "11111111111" } })).statusCode, 400);
  assert.equal((await request({ ...valid, contribution: 0 })).statusCode, 400);
  assert.equal((await request({ ...valid, bundle: "true" })).statusCode, 400);
  assert.equal((await request({ ...valid, tracking: { utm_source: "x".repeat(501) } })).statusCode, 400);
  assert.equal((await request(valid)).statusCode, 503);
});

test("não apresenta erro do gateway nem resultado inconsistente como sucesso", async () => {
  process.env.PARADISE_API_KEY = "test-key";
  const originalFetch = global.fetch;
  try {
    global.fetch = async () => ({ ok: false, json: async () => ({ error: "segredo" }) });
    let response = await request(valid);
    assert.equal(response.statusCode, 502);
    assert.equal(JSON.stringify(response.body).includes("segredo"), false);
    global.fetch = async () => ({ ok: true, json: async () => ({ status: "success", qr_code: "abc", amount: 1 }) });
    response = await request(valid);
    assert.equal(response.statusCode, 502);
    global.fetch = async () => { throw new Error("falha"); };
    response = await request(valid);
    assert.equal(response.statusCode, 502);
    assert.match(response.body.error, /painel/);
  } finally {
    global.fetch = originalFetch;
    delete process.env.PARADISE_API_KEY;
  }
});
