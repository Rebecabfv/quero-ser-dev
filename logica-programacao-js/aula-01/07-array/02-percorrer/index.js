// const alunas = ['Rebeca', 'Ceci', 'Carol', 'Lorraine'];

// alunas.push('Naty');

// // Loop for tradicional
// for (i = 0; i < alunas.length; i++) {
//   console.log(alunas[i]);
// }

// // For of - varrer os elementos da array - monstrar todos os dados da array
// // pode ser usado com iterables
// for (let aluna of alunas) {
//   console.log(aluna);
// }

// // For oin- varrer os elementos da array - monstrar todos os indices da array
// for (let aluna in alunas) {
//   console.log(aluna);
// }

function verificaNumeroPrimo(num) {
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

const numerosTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 21, 53, 83];
const numerosPrimos = [];

for (let numeroTeste of numerosTeste) {
  if (verificaNumeroPrimo(numeroTeste)) {
    numerosPrimos.push(numeroTeste);
  }
}
console.log(numerosPrimos);
