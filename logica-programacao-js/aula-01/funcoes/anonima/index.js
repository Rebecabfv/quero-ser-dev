//Funções Anônimas

//Se quisermos fazer uma função que vai rodar apenas uma vez ou que vai ser passada como parâmetro para outra função podemos criá-la sem nome...
const button = document.getElementById('meubotao');
button.addEventListener(function (evt) {
  console.log('click');
});

//Podemos colocar todo esse código em uma função anônima que se invoca imediatamente após a declaração também, seria assim:
//Aqui, colocamos a função toda entre parênteses e um par adicional de parênteses para invocá-la. Isso faz com que ela rode imediatamente e deixe de existir.
(function () {
  const button = document.getElementById('meubotao');
  button.addEventListener(function (evt) {
    console.log('click');
  });
})();

//Uma forma muita mais comum de usar funções anônimas é colocá-las em variáveis, lembre-se que funções são valores e podem ser armazenadas em variáveis:
const somar = function (num1, num2) {
  return num1 + num2;
};

somar(1, 3);
