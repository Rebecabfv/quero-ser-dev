let desejaContinuar = 'S';

while (desejaContinuar === 'S') {
  let nome;

  while (!nome || nome.length < 2) {
    nome = prompt('Entre com seu nome:');
  }

  alert('Olá ' + nome);

  desejaContinuar = prompt('Digite S/N').toUpperCase();
}

alert('Cadastros efetuados');
