var valor, resultado;

function botao(number) {
  valor = document.calc.visor.value += number; //contatenando valor anterior ao "number", recebido por parâmetro, podendo ser os sinais.
}

function reseta() {
  document.calc.visor.value = "";
}

function calcula() {
  resultado = eval(valor);
  document.calc.visor.value = resultado.toLocaleString('pt-br');
}