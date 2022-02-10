function somar(num1, num2) {
  return num1 + num2;
}

const result = somar(100, 200);
console.log(result);

//Return como finalizador da função
// Sempre que sua função encontra um return ela termina imediatamente. Sendo assim, nada após o return irá executar. Por isso que sempre colocamo-os na última linha.

//Somar com parâmetros e retorno se os parâmetros são números
function somar(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return NaN;
  return num1 + num2;
}

// Somar com parâmetros e retorno se os parâmetros são números (ternário)
function somar(num1, num2) {
  return isNaN(num1) || isNaN(num2) ? NaN : num1 + num2;
}

// Parâmetros opcionais --> colocando valor padrão para o parâmetro
function cumprimenta(nome, periodo = 'noite') {
  console.log('olá ' + nome);
  console.log('Estamos no período do dia da ' + periodo);
}
cumprimenta('Maria');
