const alunas = ['Carla de Souza', 'Rebeca Baptista', 'Jaque Viana'];

const [primeiraAluna, segundaAluna] = alunas;
console.log(primeiraAluna, segundaAluna);

for (let aluna of alunas) {
  // Separar uma array
  const alunaArray = aluna.split(' '); // transforma uma string em array
  const [nome, ...sobrenomeArray] = alunaArray;
  const sobrenome = sobrenomeArray.join(' '); // tranforma array em string

  console.log(nome);
  console.log(sobrenome);
}
