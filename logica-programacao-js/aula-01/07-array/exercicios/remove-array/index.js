// Dado o array de números [12, 5, 8, 130, 44].
// 1. Colocar em um novo array os números menores do que 10.
// 2. Retire todos os números menores que 10 do array original.

// 1)
// const numeros = [12, 5, 8, 130, 44];
// const numeroMenorQueDez = [];

// for (let numero of numeros) {
//   if (numero < 10) {
//     numeroMenorQueDez.push(numero);
//   }
// }

// console.log(numeroMenorQueDez);

// 2)
const numeros = [12, 5, 8, 130, 44];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 10) {
    numeros.splice(i, 1);
    i = 0;
  }
}

console.log(numeros);
