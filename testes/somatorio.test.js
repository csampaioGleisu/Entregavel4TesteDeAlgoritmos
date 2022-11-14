const somatorio = require("../funções/somatorio");
let array = [1, 9, 35, 45, 2, 8, 10];
let array2 = [10, 80, 90, 20];

test("a soma do array deve estar correta", () => {
  expect(somatorio(array)).toBe(110);
});

test("a soma do array deve estar correta", () => {
  expect(somatorio(array2)).toBe(200);
});
