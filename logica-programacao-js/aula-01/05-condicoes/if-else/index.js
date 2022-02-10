let estaSol = true;
if (estaSol) {
  console.log('fui para a praia');
} else {
  console.log('fui para o campo');
}

//As chaves do if e else podem ser omitidas quando há apenas um comando no corpo:
estaSol = false;
if (estaSol) console.log('fui para a praia');
else console.log('fui para o campo');

//Existe o operador ternário, ele produz um valor caso a condição seja satisfeita e um segundo valor caso não seja:
estaSol = false;
let ondeVou = estaSol ? 'praia' : 'campo';
console.log(ondeVou);

function checaPar(numero) {
  const ehPar = numero % 2 === 0;

  if (ehPar) {
    return 'par';
  }

  return 'impar';
}
console.log(checaPar(5));

function turnoDoDia() {
  const horas = Number(prompt('Entre com um horário:'));

  if (horas < 6) {
    return 'Boa madrugada';
  }

  if (horas >= 6 && horas < 12) {
    return 'Bom dia!';
  }

  if (horas >= 12 && horas < 18) {
    return 'Bom tarde!';
  }

  if (horas >= 18 && horas < 24) {
    return 'Boa noite!';
  }

  return 'Horário inválido';
}

console.log(turnoDoDia());
