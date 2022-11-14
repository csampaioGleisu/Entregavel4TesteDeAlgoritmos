function numeroprimo(num) {
  let primo = true;
  for (let contador = 2; contador < num; contador++) {
    if (num % contador === 0) {
      primo = false;
      break;
    }
  }
  if (primo == true) {
    return "é primo";
  } else {
    return "Não é primo";
  }
}
module.exports = numeroprimo;

//let determinadoNumero = 50;
//for (var i = 2; i < determinadoNumero; i++)
//if (numeroprimo(i)) console.log(i);
