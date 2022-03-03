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
