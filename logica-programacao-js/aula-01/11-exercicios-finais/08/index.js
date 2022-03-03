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

// nome: 'Joana',
// materias: {

// },
// historia: [9, 5, 6],
// matematica: [3, 7, 8],
// fisica: [10, 10, 6],

const alunas = [
  {
    nome: 'Joana',
    materias: [
      {
        historia: [9, 5, 6],
      },
      {
        matematica: [3, 7, 8],
      },
      {
        fisica: [10, 10, 6],
      },
    ],
  },
  // {
  //   nome: 'Bia',
  //   historia: [6, 5, 6],
  //   matematica: [7, 7, 8],
  //   fisica: [8, 6, 9],
  // },
];

const alunasComMedia = alunas.map((aluna, indice) => {
  console.log(alunas[indice].materias);

  // const soma = aluna[indice].materias[indice].reduce(
  //   (somaAtual, nota, indice, arrayInteiro) => {
  //     return somaAtual + nota;
  //   },
  //   0
  // );

  const media = 3;

  const { nome, materias } = aluna;
  return {
    ...aluna,
    materias: [{ ...materias[indice], media }],
  };
  // console.log(soma);

  // console.log(media);
});

console.log(alunasComMedia);
