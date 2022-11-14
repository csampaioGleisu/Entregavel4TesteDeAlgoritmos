function quicksort2(array) {
  if (array.length === 0) return [];
  if (array.length === 1) return array;

  const pivo = array[array.length - 1];
  const MenorQuePivo = [];
  const MaiorQuePivo = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivo) {
      MenorQuePivo.push(array[i]);
    } else {
      MaiorQuePivo.push(array[i]);
    }
  }
  if (MenorQuePivo.length > 0 && MaiorQuePivo.length > 0) {
    return [...quicksort2(MenorQuePivo), pivo, ...quicksort2(MaiorQuePivo)];
  } else if (MenorQuePivo.length > 0) {
    return [...quicksort2(MenorQuePivo), pivo];
  } else {
    return [pivo, ...quicksort2(MaiorQuePivo)];
  }
}
//const numeros = [8, 2, 5, 7, 4, 3, 12, 6, 19, 11, 10, 13, 9];
//console.log(quicksort2(numeros));
module.exports = quicksort2;
