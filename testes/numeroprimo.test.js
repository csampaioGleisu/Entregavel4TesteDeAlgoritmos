const numeroprimo = require("../funções/numeroprimo");

test("verificar se o número 12 é primo ", () => {
  expect(numeroprimo(12)).toBe("Não é primo");
});

test("verificar se o número 19 é primo ", () => {
  expect(numeroprimo(19)).toBe("é primo");
});
