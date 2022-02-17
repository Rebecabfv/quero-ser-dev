const aluna = {
  nome: 'Ze',
  idade: 25,
  cpf: '111.111.111-11',
};

// Mostrar as propriedades do objeto
for (let propriedade in aluna) {
  console.log(aluna[propriedade]);

  if (propriedade === idade) {
    aluna.dobroDaIdade = aluna[propriedade] * 2;
  }
}

console.log(aluna);
