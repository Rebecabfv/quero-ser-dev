//Arrow functions são escritas sem a palavra function, e a quando tem apenas um comando que será retornado as chaves podem ser omitidas, bem como a palavra return.
//Se apenas um parâmetro for usado os parênteses podem ser omitidos também. Separando os parâmetros do corpo da função termos uma flecha => por isso o nome arrow function.

// Exemplo: Somar com parâmetros e retorno como arrow function

const somar = (num1, num2) => num1 + num2;

//Vamos rescrever o exemplo do botão com arrow function para exemplificar mais:

const button = document.getElementById('meubotao');
button.addEventListener((evt) => console.log('click'));
//Nesse caso, omitimos os parênteses, e as chaves, a função ficou super reduzida.

//Arrow functions maiores podem ser escritas mantendo as chaves, mas lembre-se, sempre que usar chaves você não poderá mais omitir a palavra return para retornar...

const teste = () => {
  console.log('1');
  console.log('2');
  console.log('3');
  console.log('testando...');
  return 'OK';
};
