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
