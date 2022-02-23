const esportes = [
  {
    nome: 'futebol',
    individual: false,
    duracaoEstimadaEmMinutos: 90,
  },
  {
    nome: 'volei',
    individual: false,
    duracaoEstimadaEmMinutos: 120,
  },
  {
    nome: 'cricket',
    individual: true,
    duracaoEstimadaEmMinutos: 50,
  },
  {
    nome: 'esgrima',
    individual: true,
    duracaoEstimadaEmMinutos: 20,
  },
  {
    nome: 'squash',
    individual: true,
    duracaoEstimadaEmMinutos: 70,
  },
  {
    nome: '100m rasos',
    individual: true,
    duracaoEstimadaEmMinutos: 1,
  },
];

// 1) Encontre um esporte que é individual
function esporteIndividual(esportes) {
  const esporteIndividual = esportes.find(
    (esporte) => esporte.individual === true
  );
  return esporteIndividual;
}
console.log(esporteIndividual(esportes));

// 2) Encontre um esporte cuja duração estimada é abaixo de 40 mins
function duracaoEstimada(esportes) {
  const durancaoAbaixo40 = esportes.find(
    (esporte) => esporte.duracaoEstimadaEmMinutos < 40
  );
  return durancaoAbaixo40;
}
console.log(duracaoEstimada(esportes));

// 3) Encontre todos esportes individuais com duração superior a 20 mins
function duracaoSuperior(esportes) {
  const durancaoSuperior20 = esportes.filter(
    (esporte) => esporte.duracaoEstimadaEmMinutos > 20
  );
  return durancaoSuperior20;
}
console.log(duracaoSuperior(esportes));
