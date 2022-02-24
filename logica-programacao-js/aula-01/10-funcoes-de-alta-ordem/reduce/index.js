// imagine que você queira apenas percorrer um array e executar uma operação
const alunas = [
  {
    nome: 'Maria',
    idade: 27,
    cpf: '123.456.789-02',
    notas: [9, 6, 7],
    media: null,
  },
  {
    nome: 'Joaquina',
    idade: 21,
    cpf: '123.456.789-02',
    notas: [10, 8, 0],
    media: null,
  },
];

const aluno = alunas.map((aluno) => {
  const soma = aluno.notas.reduce((somaAtual, nota, indice, arrayInteiro) => {
    return somaAtual + nota;
  }, 0);
});
