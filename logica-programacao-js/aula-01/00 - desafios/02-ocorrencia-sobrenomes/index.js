const pessoas = [
  'Ana Peres',
  'Maria Silva',
  'Cleide Peres',
  'Carlos Levir',
  'Zeca Silva',
  'Paulo Souza',
  'Roger Guimarães',
  'Carlos de Almeida',
  'Mayk Souza',
  'Paula Guimarães',
  'Edson Souza',
  'Milena Komatsu',
  'Zé Souza',
  'Joana Batisteti',
  'Carla Zuko',
  'Bruna de Almeida',
  'Jonas Peres',
];

const contagemDeSobrenomes = {};

for (let pessoa of pessoas) {
  const pessoaArray = pessoa.split(' '); // transforma string em array

  const [nome, ...sobrenomeArray] = pessoaArray;

  const sobrenome = sobrenomeArray.join(' '); // transforma array em string

  contagemDeSobrenomes[sobrenome] = contagemDeSobrenomes[sobrenome] //condição
    ? contagemDeSobrenomes[sobrenome] + 1 // caso verdadeiro
    : 1; // caso falso
}

console.log(contagemDeSobrenomes);
