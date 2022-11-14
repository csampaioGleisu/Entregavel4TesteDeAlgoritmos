const GerarFibonacci = require("../funções/fibonacci");

it("os 12 primeiros números devem ser os corretos", () => {
  expect(GerarFibonacci(12)).toMatchObject([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
  ]);
});

it("a quantidade de números entre 10 e 20 deve ser 11", () => {
  expect(GerarFibonacci(2)).toMatchObject([0, 1]);
});
