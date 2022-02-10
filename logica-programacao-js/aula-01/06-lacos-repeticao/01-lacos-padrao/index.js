const numeroDeCadastrosTotal = 3;
let numeroDeCadastrosEfetuados = 0;

while (numeroDeCadastrosEfetuados < numeroDeCadastrosTotal) {
  const nome = prompt('Entre com seu nome:');
  alert('Olá ' + nome);
  numeroDeCadastrosEfetuados += 1;
}

alert('Cadastros efetuados');
