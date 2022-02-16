//Faça uma função que receba um número e verifique se ele é primo
// (um número primo é apenas divisível por 1 e por ele mesmo)

export function verificaNumeroPrimo(num) {
  if (num < 1) {
    return false;
  }

  if (num === 1 || num === 2) {
    return true;
  }

  let divisor = 2;

  while (divisor < num) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 1;
  }

  return true;
}

console.log(verificaNumeroPrimo(2));
