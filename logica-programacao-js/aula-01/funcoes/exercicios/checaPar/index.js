//8. Resolva o exercício 4 criando uma função checaPar que recebe um número como parâmetro e devolve true se o número é par e false, caso contrário
//  1. Resolva utilizando a sintaxe de function
function checaPar1(num) {
  const resto = num % 2 === 0;
  console.log(`${num} é par: ${resto}`);
}
checaPar1(2);

//  2. Resolva utilizando a sintaxe de arrow function
const checaPar2 = (num) => {
  const result = num % 2 === 0;
  console.log(`${num} é par: ${result}`);
};
checaPar2(5);

//  3. Resolva agora deixando a função sem parâmetros e lendo o input do número do usuário nas duas sintaxes
const checaPar3 = (num) => {
  const result = num % 2 === 0;
  console.log(`${num} é par: ${result}`);
};
checaPar3(parseInt(prompt('Digite um número inteiro:')));
