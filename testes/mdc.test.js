const calcularMDC = require("../funções/mdc");

test("o  mdc de 15 e 30 deve ser 15", () => {
  expect(calcularMDC(15, 30)).toBe(15);
});

test("o mdc de 12 e 6 deve ser 6", () => {
  expect(calcularMDC(6, 12)).toBe(6);
});
