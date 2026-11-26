const test = require("node:test");
const assert = require("node:assert/strict");
const { nextDraw, formatRemaining } = require("../js/sorteio-contagem");

test("conta até domingo às 18h no horário de Brasília", () => {
  const thursday = Date.parse("2026-11-26T03:00:00Z");
  assert.equal(new Date(nextDraw(thursday)).toISOString(), "2026-11-29T21:00:00.000Z");
  assert.equal(formatRemaining(thursday), "3d 18h 00min 00s");
  assert.equal(formatRemaining(Date.parse("2026-11-29T20:59:59Z")), "0d 00h 00min 01s");
});

test("após o sorteio, avança para o domingo seguinte, inclusive na virada do ano", () => {
  assert.equal(new Date(nextDraw(Date.parse("2026-11-29T21:00:00Z"))).toISOString(), "2026-12-06T21:00:00.000Z");
  assert.equal(new Date(nextDraw(Date.parse("2026-12-31T12:00:00Z"))).toISOString(), "2027-01-03T21:00:00.000Z");
});
