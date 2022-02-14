const alunas = ['Rebeca', 'Ceci', 'Carol', 'Lorraine'];

for (i = 0; i < alunas.length; i++) {
  console.log(alunas[i]);
}

const alunasIdade = [
  ['Rebeca', 23],
  ['Ceci', 30],
  ['Carol', 25],
];

for (i = 0; i < alunas.length; i++) {
  for (j = 0; j < alunas.length; j++) {
    console.log(alunas[i][j]);
  }
}
