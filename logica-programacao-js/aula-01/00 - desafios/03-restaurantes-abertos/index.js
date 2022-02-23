const restaurantes = [
  {
    nome: 'Pizzaria do Mario',
    horario_abertura: 14,
    horario_fechamento: 23,
  },
  {
    nome: 'Churrascaria do Ronaldo',
    horario_abertura: 11,
    horario_fechamento: 14,
  },
  {
    nome: 'Bar do Zeca',
    horario_abertura: 12,
    horario_fechamento: 2,
  },
  {
    nome: 'Doceria da Mara',
    horario_abertura: 8,
    horario_fechamento: 20,
  },
];

function procuraRestaurante(restaurantes) {
  const horarioAtual = new Date().getHours();
  const { nome, horario_abertura, horario_fechamento } = restaurantes;
  const restaurantesDisponiveis = restaurantes.filter(
    (restaurante) =>
      restaurante.horario_abertura >= horarioAtual &&
      restaurante.horario_fechamento > horarioAtual
  );
  console.log(restaurantesDisponiveis);
}

procuraRestaurante(restaurantes);
