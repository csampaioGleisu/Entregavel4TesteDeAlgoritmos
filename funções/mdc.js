function calcularMDC(num1, num2) {
  let resto;
  do {
    resto = num1 % num2;

    num1 = num2;

    num2 = resto;
  } while (resto != 0);

  return num1;
}
module.exports = calcularMDC;

//var resultado = calcularMDC(15, 30);
//console.log(resultado);
