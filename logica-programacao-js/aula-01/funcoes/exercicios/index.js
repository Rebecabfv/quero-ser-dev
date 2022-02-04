//7. Resolva o exercício 3 criando uma função dobraNumero que recebe um número como parâmetro e devolve seu dobro
//    1. Resolva utilizando a sintaxe de function
function dobraNumero1(num) {
  console.log(num * 3);
}
dobraNumero1(5);

//    2. Resolva utilizando a sintaxe de arrow function
const dobraNumero2 = (num) => console.log(num * 3);
dobraNumero2(4);

//    3. Resolva agora deixando a função sem parâmetros e lendo o input do número do usuário nas duas sintaxes
const dobraNumero3 = (num) => console.log(num * 3);
dobraNumero3(Number(prompt('Digite um número:')));
