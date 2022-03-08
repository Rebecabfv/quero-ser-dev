// // Calcule as médias por matéria das provas para os alunos abaixo:
// Jonas;
// História: 9, 5, 6;
// Matemática: 3, 7, 8;
// Física: 10, 10, 6;
// Bia;
// História: 6, 5, 6;
// Matemática: 7, 7, 8;
// Física: 8, 6, 9;
// Renata;
// História: 8, 7, 9;
// Matemática: 9, 7, 7;
// Física: 5, 5, 8;

const alunas = [
  {
    nome: 'Joana',
    historia: [9, 5, 6],
    matematica: [3, 7, 8],
    fisica: [10, 10, 6],
  },
  {
    nome: 'Bia',
    historia: [6, 5, 6],
    matematica: [7, 7, 8],
    fisica: [8, 6, 9],
  },
  {
    nome: 'Renata',
    historia: [8, 7, 9],
    matematica: [9, 7, 7],
    fisica: [5, 5, 8],
  },
];

const alunasComMedia = alunas.map((aluna) => {
  const somaHistoria = aluna['historia'].reduce((somaAtual, nota) => {
    return somaAtual + nota;
  }, 0);

  const mediaHistoria = somaHistoria / aluna['historia'].length;

  const somaMatematica = aluna['matematica'].reduce((somaAtual, nota) => {
    return somaAtual + nota;
  }, 0);

  const mediaMatematica = somaMatematica / aluna['matematica'].length;

  const somaFisica = aluna['fisica'].reduce((somaAtual, nota) => {
    return somaAtual + nota;
  }, 0);

  const mediaFisica = somaFisica / aluna['fisica'].length;

  return {
    ...aluna,
    mediaFisica: mediaFisica,
    mediaHistoria: mediaHistoria,
    mediaMatematica: mediaMatematica,
  };
});

console.log(alunasComMedia);
