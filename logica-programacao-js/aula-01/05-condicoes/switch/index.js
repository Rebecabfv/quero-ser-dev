// O operador switch servirá para comparar um valor com vários valores possíveis pré-determinados:
let sinal = 'verde';
switch (sinal) {
  case 'verde':
    console.log('pode passar');
    break;
  case 'amarelo':
    console.log('prestes a fechar, cuidado...');
    break;
  case 'vermelho':
    console.log('fechado, não passe');
    break;
  default:
    console.log('esse não é um valor válido');
    break;
}
