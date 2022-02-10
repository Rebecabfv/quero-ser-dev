let desejaContinuar = 'S';

while (deveContinuarCadastro === 'S') {
  const nome = prompt('Entre com seu nome:');

  alert('Olá ' + nome);

  desejaContinuar = prompt('Digite S/N').toUpperCase();
}

alert('Cadastros efetuados');
