const test = require("node:test");
const assert = require("node:assert/strict");
const handler = require("../api/pix");
const { calculateBundleTotal } = require("../js/adicionais-contribuicao");

const valid = {
  customer: {
    name: "Pessoa Exemplo",
    email: "exemplo@example.com",
    document: "52998224725",
    phone: "11999999999",
  },
  contribution: 1000,
  bundleChecked: false,
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

test("Turbine adiciona R$ 5,90 apenas abaixo de R$ 100", () => {
  assert.equal(calculateBundleTotal(9999, true), 10589);
  assert.equal(calculateBundleTotal(10000, true), 10000);
  assert.equal(calculateBundleTotal(9999, false), 9999);
  assert.equal(calculateBundleTotal(10000, "true"), null);
});

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

test("integração Horizon usa centavos, nome do ebook, Turbine e UTMs", async () => {
  process.env.HORIZON_API_KEY = "test-key";
  const originalFetch = global.fetch;
  const sent = [];
  global.fetch = async (url, options) => {
    const body = JSON.parse(options.body);
    sent.push({ url, options, body });
    return { ok: true, json: async () => ({
      status: "PENDING", pix: { code: "pix-exemplo", qrCodeDataUrl: "data:image/png;base64,AAAA" }, amountCents: body.amountCents,
    }) };
  };
  try {
    const plain = await request(valid);
    const extra = await request({ ...valid, contribution: 1000, bundleChecked: true });
    const over100 = await request({ ...valid, contribution: 10000, bundleChecked: true });
    const boundary = await request({ ...valid, contribution: 35000, bundleChecked: true });
    assert.deepEqual([plain.body.amount, extra.body.amount, over100.body.amount, boundary.body.amount], [1000, 1590, 10000, 35000]);
    assert.equal(plain.statusCode, 200);
    assert.equal(plain.body.code, "pix-exemplo");
    assert.equal(sent[0].url, "https://app.horizonpags.com/api/v1/transactions");
    assert.equal(sent[0].options.headers["x-api-key"], "test-key");
    assert.match(sent[0].options.headers["Idempotency-Key"], /^[0-9a-f-]{36}$/);
    assert.notEqual(sent[0].options.headers["Idempotency-Key"], sent[1].options.headers["Idempotency-Key"]);
    assert.deepEqual(sent[0].body.utm, {
      source: "teste", medium: "cpc", campaign: "campanha", content: "anuncio",
      term: "busca", src: "origem-anuncio", sck: "identificador-anuncio",
    });
    assert.equal(sent[0].body.description, "Ebook Menino Tobias");
    assert.equal(sent[1].body.description, "Ebook Menino Tobias - Turbine");
    assert.ok(sent.every(({ body }) => body.description.startsWith("Ebook Menino Tobias")));
    assert.deepEqual(sent[0].body.customer, valid.customer);
    assert.notEqual(sent[0].body.externalRef, sent[1].body.externalRef);
    assert.equal(plain.body.qrImage, "data:image/png;base64,AAAA");
    assert.equal(JSON.stringify(plain.body).includes("test-key"), false);
    assert.equal(JSON.stringify(plain.body).includes(valid.customer.document), false);
  } finally {
    global.fetch = originalFetch;
    delete process.env.HORIZON_API_KEY;
  }
});

test("tracking ausente é aceito e campos não documentados não são enviados", async () => {
  process.env.HORIZON_API_KEY = "test-key";
  const originalFetch = global.fetch;
  const sent = [];
  global.fetch = async (url, options) => {
    const body = JSON.parse(options.body);
    sent.push(body);
    return { ok: true, json: async () => ({ status: "PENDING", pix: { code: "pix" }, amountCents: body.amountCents }) };
  };
  try {
    const withoutTracking = { ...valid };
    delete withoutTracking.tracking;
    assert.equal((await request(withoutTracking)).statusCode, 200);
    assert.deepEqual(sent[0].utm, {});
    assert.equal((await request({ ...valid, tracking: { src: "anuncio", extra: "ignorado" } })).statusCode, 200);
    assert.deepEqual(sent[1].utm, { src: "anuncio" });
  } finally {
    global.fetch = originalFetch;
    delete process.env.HORIZON_API_KEY;
  }
});

test("rejeita dados inválidos, origem externa e configuração ausente", async () => {
  assert.equal((await request(valid, { origin: "https://outra.example" })).statusCode, 403);
  assert.equal((await request(valid, { contentType: "text/plain" })).statusCode, 415);
  assert.equal((await request({ ...valid, customer: { ...valid.customer, document: "11111111111" } })).statusCode, 400);
  assert.equal((await request({ ...valid, contribution: 0 })).statusCode, 400);
  assert.equal((await request({ ...valid, contribution: 99 })).statusCode, 400);
  assert.equal((await request({ ...valid, bundleChecked: "true" })).statusCode, 400);
  assert.equal((await request({ ...valid, bundleChecked: undefined })).statusCode, 400);
  assert.equal((await request({ ...valid, contribution: 35001 })).statusCode, 400);
  assert.equal((await request({ ...valid, tracking: { utm_source: "x".repeat(501) } })).statusCode, 400);
  assert.equal((await request(valid)).statusCode, 503);
});

test("calcula Turbine no servidor e ignora valor total fornecido pelo cliente", async () => {
  process.env.HORIZON_API_KEY = "test-key";
  const originalFetch = global.fetch;
  let sent;
  global.fetch = async (url, options) => {
    sent = JSON.parse(options.body);
    return { ok: true, json: async () => ({ status: "PENDING", pix: { code: "pix" }, amountCents: sent.amountCents }) };
  };
  try {
    const response = await request({ ...valid, contribution: 1000, bundleChecked: true, amount: 1 });
    assert.equal(response.statusCode, 200);
    assert.equal(sent.amountCents, 1590);
    assert.match(sent.description, /Turbine/);
  } finally {
    global.fetch = originalFetch;
    delete process.env.HORIZON_API_KEY;
  }
});

test("não apresenta erro do gateway nem resultado inconsistente como sucesso", async () => {
  process.env.HORIZON_API_KEY = "test-key";
  const originalFetch = global.fetch;
  try {
    global.fetch = async () => ({ ok: false, json: async () => ({ error: "segredo" }) });
    let response = await request(valid);
    assert.equal(response.statusCode, 502);
    assert.equal(JSON.stringify(response.body).includes("segredo"), false);
    global.fetch = async () => ({ ok: true, json: async () => ({ status: "PENDING", pix: { code: "abc" }, amountCents: 1 }) });
    response = await request(valid);
    assert.equal(response.statusCode, 502);
    global.fetch = async () => ({ ok: true, json: async () => ({ status: "PENDING", pix: {}, amountCents: 1000 }) });
    response = await request(valid);
    assert.equal(response.statusCode, 502);
    global.fetch = async () => { throw new Error("falha"); };
    response = await request(valid);
    assert.equal(response.statusCode, 502);
    assert.match(response.body.error, /painel/);
  } finally {
    global.fetch = originalFetch;
    delete process.env.HORIZON_API_KEY;
  }
});
