const alunos = [
  {
    nome: 'Ze',
    idade: 25,
    cpf: '111.111.111-11',
  },
  {
    nome: 'Maria',
    idade: 20,
    cpf: '111.111.111-12',
  },
];

alunos.push({
  nome: 'Rebeca',
  idade: 23,
  cpf: '111.111.111-13',
});

for (let aluno of alunos) {
  console.log(aluno.nome);
  console.log(aluno['idade']);
}

// Atributo e propriedade?
