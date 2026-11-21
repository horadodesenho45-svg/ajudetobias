const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

function createSession() {
  const data = new Map();
  let now = 10000000;
  const storage = {
    setItem(key, value) { data.set(key, value); },
    getItem(key) { return data.get(key) ?? null; },
    removeItem(key) { data.delete(key); },
  };
  const context = { sessionStorage: storage, Date: { now: () => now } };
  vm.runInNewContext(
    fs.readFileSync(path.join(__dirname, "../js/dados-sessao.js"), "utf8"),
    context,
  );
  return { session: context.pixCustomerSession, data, setTime(value) { now = value; } };
}

test("reutiliza os dados na aba e os remove ao expirar ou alterar", () => {
  const { session, data, setTime } = createSession();
  const customer = { name: "Pessoa Exemplo" };
  assert.equal(session.load(), null);
  session.save(customer);
  assert.equal(session.load().name, customer.name);
  setTime(10000000 + 30 * 60 * 1000 + 1);
  assert.equal(session.load(), null);
  assert.equal(data.size, 0);
  session.save(customer);
  session.clear();
  assert.equal(session.load(), null);
});

test("não reutiliza dados gravados no futuro", () => {
  const { session, setTime } = createSession();
  session.save({ name: "Pessoa Exemplo" });
  setTime(9999999);
  assert.equal(session.load(), null);
});
