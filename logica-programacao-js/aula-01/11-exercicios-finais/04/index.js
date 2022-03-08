// Faça um script que leia 10 números do usuário e informe se algum número foi inserido em sequência. Se mais de um número for repetido, informe ao menos um (caso no Exemplo 3).

const numeros = [];
let mensagem = '';

for (let i = 0; i < 10; i++) {
  const numero = prompt(`Input ${i + 1}: `);
  numeros.push(numero);
  if (numeros[i] === numeros[i - 1]) {
    mensagem = `O número ${numero} foi repetido em sequência`;
  }
}

if (mensagem === '') {
  mensagem = 'Nenhum número foi repetido em sequência';
}

console.log(mensagem);

// let entradaUser = [];
// let tamanhoArray = 10;

// //preencher o array entradaUser com os números digitados pelo usuário
// for (let i = 0; i < tamanhoArray; i++) {
//   entradaUser[i] = parseInt(
//     prompt('Digite 10 números em sequência: ' + (i + 1))
//   );
// }
// console.log(entradaUser);

// //verificar se algum número está em sequência com filter que retornará um booleano.

// const numeroRepetido = entradaUser.filter((numero, i) => {
//   let indice = i - 1;
//   return numero === entradaUser[i - 1];
// });

// console.log(numeroRepetido);

// if (numeroRepetido) {
//   console.log('O número ' + numeroRepetido + ' foi repetido em sequência');
// }
