function somar(num1, num2) {
  return num1 + num2;
}

const result = somar(100, 200);
console.log(result);

//Return como finalizador da função
// Sempre que sua função encontra um return ela termina imediatamente. Sendo assim, nada após o return irá executar. Por isso que sempre colocamo-os na última linha.
function somar(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return NaN;
  return num1 + num2;
}

function somar(num1, num2) {
  return isNaN(num1) || isNaN(num2) ? NaN : num1 + num2;
}
