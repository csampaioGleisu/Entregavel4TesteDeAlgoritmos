const Contagem1 = require("../funções/contagem");

it("a quantidade de números entre 1 e 100 deve ser 101", () => {
  expect(Contagem1(1, 100)).toBe(101);
});

it("a quantidade de números entre 10 e 20 deve ser 11", () => {
  expect(Contagem1(10, 20)).toBe(11);
});
