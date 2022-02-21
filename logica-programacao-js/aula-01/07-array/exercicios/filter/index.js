const numeros = [12, 15, 8, 130, 44];

// use o metodo filter para gerar um array com os numeros maiores ou igual a 10
const numerosMaioresQueDez = numeros.filter((numero) => numero >= 10);

// filter pode receber 3 parametros, sendo o valor, indice e o elemento inteiro
const numerosMaiores = numeros.filter((numero, indice, elemento) => {
  console.log(numero, indice, elemento);
  // numeros.pop(); dentro da funcao podemos fazer qlq requisicao
  return numero >= 10;
});

console.log(numerosMaioresQueDez);
