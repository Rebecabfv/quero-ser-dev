//7. Resolva o exercício 3 criando uma função dobraNumero que recebe um número como parâmetro e devolve seu dobro
//    1. Resolva utilizando a sintaxe de function
function dobraNumero1(num) {
  return num * 2;
}
const resultado = dobraNumero1(5);
console.log(resultado);

//    2. Resolva utilizando a sintaxe de arrow function
const dobraNumero2 = (num) => num * 2;
const resultado2 = dobraNumero2(5);
console.log(resultado2);

//    3. Resolva agora deixando a função sem parâmetros e lendo o input do número do usuário nas duas sintaxes
const dobraNumero3 = (num) => num * 2;
const resultado3 = dobraNumero3(Number(prompt('Digite um número:')));
console.log(resultado3);
