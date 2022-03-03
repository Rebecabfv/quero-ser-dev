// Permita a um usuário jogar até 4 dados simultâneos que tenham de 4, 6, 8, 10, 12 ou 20 e retorne o valor total do número obtido da seguinte forma:
// Número de dados escolhidos: 3
// Valor sorteado do primeiro dado de 4 lados: 1
// Valor sorteado do segundo dado de 8 lados: 7
// Valor sorteado do terceiro dado de 12 lados: 12
// Valor total: 20

const numeroDeDados = prompt('Digite o numero de dados que deseja: ');

for (let i = numeroDeDados; i > 0; i--) {
  let ladoDados = Math.floor(4, 6, 8, 10, 12, 20);
  console.log(ladoDados);
}
