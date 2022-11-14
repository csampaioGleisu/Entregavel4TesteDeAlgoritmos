function Contagem1(N1, N2) {
  let resultado = 0;
  let d = 2;
  let i = 1;
  if (N1 == 1) {
    resultado = parseInt(N2) - parseInt(N1) + parseInt(d);
  } else {
    resultado = parseInt(N2) - parseInt(N1) + parseInt(i);
  }
  return resultado;
}
module.exports = Contagem1;

//console.log(Contagem1(1, 100));
