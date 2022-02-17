// Faça um programa que receba 5 números do usuário e os armazene de maneira ordenada em um array.

function ordenaArray(numeros) {
  const ordenada = numeros;
  ordenada.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return ordenada;
}

const numeros = [1, 10, 13, 21, 3, 2, 5, 4];

console.log(ordenaArray(numeros));
