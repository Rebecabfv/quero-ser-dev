// 5. De um objeto carro com as seguintes propriedades: cor, marca e modelo

// a) Permita a um usuário entrar com as informações de um carro e depois exiba o carro cadastrado em tela.

const cadastraCarro = (carros) => {
  const cor = prompt('Cor do carro:');
  const marca = prompt('Marca do carro:');
  const ano = parseInt(prompt('Ano do carro:'));

  // const carro = {
  //   marca: marca,
  //   ano: ano,
  // };

  // // short syntax
  // // Funciona se já tivermos variáveis com os mesmos nomes das propriedades
  const carro = {
    cor,
    marca,
    ano,
  };

  carros.push(carro);
};

// b) Agora permita cadastrar múltiplos carros e salve os dados de cada um em um array de carros.
// Para sair do cadastro usuário deve escolher uma opção diferente de “S”. No final exiba os dados dos carros salvos.

function desejaContinuar() {
  let queroContinuar = 'S';
  const carros = [];
  while (queroContinuar === 'S') {
    cadastraCarro(carros);
    queroContinuar = prompt('Deseja continuar? S/N').toUpperCase();
  }

  return carros;
}

console.log(desejaContinuar());
