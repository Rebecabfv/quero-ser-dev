const numero1 = 2;
const numero2 = 5;

const primeiroMaiorQueSegundo = numero1 > numero2;
console.log(primeiroMaiorQueSegundo);

const primeiroMenorQueSegundo = numero1 < numero2;
console.log(primeiroMenorQueSegundo);

// É importante usar sempre usar três iguais para garantir a comparação dos tipos da variáveis
const primeiroIgualQueSegundo = numero1 === numero2;
console.log(primeiroIgualQueSegundo);

const primeiroMaiorIgualQueSegundo = numero1 >= numero2;
console.log(primeiroMaiorIgualQueSegundo);

const primeiroMenosIgualQueSegundo = numero1 <= numero2;
console.log(primeiroMenosIgualQueSegundo);

// Comparando o valor
// const primeiroDiferenteQueSegundo = numero1 != numero2;
// console.log(primeiroDiferenteQueSegundo);
// Comparando o valor e o tipo
const primeiroDiferenteQueSegundo = numero1 !== numero2;
console.log(primeiroDiferenteQueSegundo);

// EXERCÍCIO
// Peça para o usuário digitar um número e exiba na tela o resultado desta comparação da seguinte forma:
// O número digitado é par: true
// O número digitado é par: false
const number = parseInt(prompt('Digite um número'));
const resto = number % 2 === 0;
console.log('O número digitado é par: ' + resto);
