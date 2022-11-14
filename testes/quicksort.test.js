const quicksort2 = require("../funções/quicksort");
let arr = [8, 2, 5, 7, 4, 3, 12, 6, 19, 11, 10, 13, 9];
let arr2 = [99, 576, 1, 9, 71, 451];

test("a ordenação dos números do array (arr) deve estar correta", () => {
  expect(quicksort2(arr)).toMatchObject([
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19,
  ]);
});

test("a ordenação dos números do array (arr2) deve estar correta", () => {
  expect(quicksort2(arr2)).toMatchObject([1, 9, 71, 99, 451, 576]);
});
