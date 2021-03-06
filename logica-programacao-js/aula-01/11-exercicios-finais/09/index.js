const animais = [
  {
    nome: 'Laranja',
    idadeEmMeses: 12,
    especie: 'cachorro',
  },
  {
    nome: 'Reginaldo',
    idadeEmMeses: 25,
    especie: 'gato',
  },
  {
    nome: 'Fubá',
    idadeEmMeses: 3,
    especie: 'coelho',
  },
  {
    nome: 'Chiclete',
    idadeEmMeses: 34,
    especie: 'porquinho-da-índia',
  },
  {
    nome: 'Bud',
    idadeEmMeses: 34,
    especie: 'cachorro',
  },
  {
    nome: 'Popó',
    idadeEmMeses: 39,
    especie: 'cobra',
  },
  {
    nome: 'Mary',
    idadeEmMeses: 4,
    especie: 'cachorro',
  },
  {
    nome: 'Chocolate',
    idadeEmMeses: 12,
    especie: 'cachorro',
  },
  {
    nome: 'Sônia',
    idadeEmMeses: 2,
    especie: 'cacatua',
  },
  {
    nome: 'Mel',
    idadeEmMeses: 3,
    especie: 'cachorro',
  },
  {
    nome: 'Clara',
    idadeEmMeses: 45,
    especie: 'cobra',
  },
  {
    nome: 'Bela',
    idadeEmMeses: 12,
    especie: 'gato',
  },
  {
    nome: 'Hari',
    idadeEmMeses: 88,
    especie: 'coelho',
  },
  {
    nome: 'Flora',
    idadeEmMeses: 12,
    especie: 'cachorro',
  },
  {
    nome: 'Linda',
    idadeEmMeses: 56,
    especie: 'coelho',
  },
  {
    nome: 'Flor',
    idadeEmMeses: 2,
    especie: 'cachorro',
  },
  {
    nome: 'Nic',
    idadeEmMeses: 42,
    especie: 'cachorro',
  },
  {
    nome: 'Bruce',
    idadeEmMeses: 12,
    especie: 'gato',
  },
  {
    nome: 'Stella',
    idadeEmMeses: 4,
    especie: 'gato',
  },
  {
    nome: 'Rosa',
    idadeEmMeses: 68,
    especie: 'coelho',
  },
  {
    nome: 'Ester',
    idadeEmMeses: 23,
    especie: 'gato',
  },
];

// a) Calcule a idade média dos animais.

const todasIdade = [];
const agrupaIdades = animais.map((animal) => {
  todasIdade.push(animal['idadeEmMeses']);

  return todasIdade;
});

const soma = todasIdade.reduce((somaAtual, nota, indice, arrayInteiro) => {
  return somaAtual + nota;
}, 0);

const media = soma / todasIdade.length;

console.log('Media das idade dos animais em meses: ' + media);

// // b) Encontre todos os animais com menos de 18 meses.

const animaisComMenos18Meses = animais.filter(
  (animal) => animal.idadeEmMeses < 18
);
console.log(animaisComMenos18Meses);

// c) Faça um novo array que agrupe a quantidade de animais por especie. Exemplo:

// [
//     {
//     especie: 'gato',
//     quantidade: 3
//   },
//   {
//     especie: 'coelho',
//     quantidade: 1
//   },
//     ...
// ]

const contagemAnimimal = [];

// retorna uma array com a especie e a quantidade de todos os animais
const somaQuantidadeAnimais = animais.map((animal) => {
  if (contagemAnimimal[animal['especie']]) {
    contagemAnimimal[animal['especie']] =
      contagemAnimimal[animal['especie']] + 1;

    return {
      especie: animal['especie'],
      quantidade: contagemAnimimal[animal['especie']],
    };
  } else {
    contagemAnimimal[animal['especie']] = 1;
    return {
      especie: animal['especie'],
      quantidade: contagemAnimimal[animal['especie']],
    };
  }
});

somaQuantidadeAnimais.reverse();

const final = [];
const agrupaAnimais = somaQuantidadeAnimais.map((animal) => {
  if (final[animal['especie']]) {
    return;
  } else {
    final[animal['especie']] = animal;
  }
});

console.log(final);
