// Peça para o usuário digitar um número e devolva seu dobro.
const number = Number(
  prompt('Digite um número para calcular o triplo do número:')
);
const dobro = number * 3;
console.log(`Esse é o dobro do número: ${dobro}`);

//Peça para o usuário digitar um número e verifique se o número é par.
const numero = parseInt(
  prompt('Digite um número para verificar se ele é par:')
);
const resto = numero % 2;
if (resto == 0) {
  console.log('O número digitado é par!');
} else {
  console.log('O número digitado é impar!');
}
