// Crie uma função tornaCaixaAlta para converter qualquer texto para todas letras em maiúsculo

const tornaCaixaAlta = (text) => text.toUpperCase();
const textoCaixAlta = tornaCaixaAlta(
  prompt('Digite um texto para converter em letras maiúsculas:')
);
console.log(textoCaixAlta);
