function GerarFibonacci(numero) {
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < numero; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}
module.exports = GerarFibonacci;

//var n = GerarFibonacci(12);
//Assim quanto maior o número colocado maior a quantidade de interações.
//console.log(n);
