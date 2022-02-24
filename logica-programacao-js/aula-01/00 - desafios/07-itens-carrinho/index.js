const carrinho = [
  {
    produto: 'Camisa branca:',
    quantidade: 4,
    valorDaUnidade: 25.5,
  },
  {
    produto: 'Calça jeans:',
    quantidade: 2,
    valorDaUnidade: 180.25,
  },
  {
    produto: 'Jaqueta',
    quantidade: 1,
    valorDaUnidade: 299.99,
  },
  {
    produto: 'Tênis de Corrida',
    quantidade: 1,
    valorDaUnidade: 150.5,
  },
  {
    produto: 'Par de meias',
    quantidade: 3,
    valorDaUnidade: 15.0,
  },
  {
    produto: 'Relógio esportivo',
    quantidade: 1,
    valorDaUnidade: 350.0,
  },
];

const somaTotal = carrinho.reduce((taxa, produto) => {
  return taxa + produto.valorDaUnidade * produto.quantidade;
}, 15);

const totalFormatado = somaTotal.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

console.log(totalFormatado);
