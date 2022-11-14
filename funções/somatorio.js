function somatorio(array) {
  let soma = 0;
  for (var i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}
module.exports = somatorio;

//console.log(somatorio(array));
