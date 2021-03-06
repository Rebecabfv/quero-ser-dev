// const tem que atribuir valor no momento de declaracao e let não
// atribuindo string a variavel
const palavra = 'Olá usuário';
console.log(palavra);
alert(palavra);

// atribuindo int a variavel
let numero;
numero = 20;
console.log(numero);

// atribuindo real a variavel
const preco = 20.75;
console.log(preco);

// atribuindo booleano a variavel
const questionTrue = true;
const questionFalse = false;
console.log(true, false);

// pegando entrada do usuario
const numeroUsuario = prompt('Digite um número:');
console.log(numeroUsuario);

// Usando prompt, peça para o usuário digitar seu nome e retorne uma mensagem “Olá, Fulano”, onde Fulano seria o nome digitado
const usuario = prompt('Digite seu nome:');
alert('Olá ' + usuario);

// Peça para o usuário digitar um número e devolva seu dobro.
const number = prompt('Digite um número:');
const dobro = number * 3;
console.log('Esse é o dobro do número:' + number * 3);

// Template String
console.log(`Esse é o dobro do número: ${dobro}`);

// var sobre hoisting e é declarada automaticamente no início do nosso script
// var não respeita o escopo --> por isso utilizar o let no lugar do var
// const tem que atribuir valor para variavel no momento de declaração

// 1. Variáveis definidas com const não podem ser redefinidas e tem que ter um valor atribuído a si na sua declaração
// 2. Variáveis definidas com let podem ser redefinidas e não tem que ter um valor atribuído a si na sua declaração
// 3. Variáveis definidas com var sofrem *hoisting* e seus valores armazenados estão disponíveis antes de sua declaração ao executarmos o código, gerando problemas de escopo e potencialmente introduzem *bugs* no programa
