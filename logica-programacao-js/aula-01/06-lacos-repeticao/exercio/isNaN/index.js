// Impeça que seu usuário digite um número inválido,
//utilizando um loop para forçá-lo a digitar um número
// válido. Dica utilize a função isNaN() para checar se
// o valor passado é válido.

let num;

while (isNaN(num)) {
  num = parseFloat(prompt('Digite com um número válido'));
}

alert(num);
