// 5. De um objeto carro com as seguintes propriedades: cor, marca e modelo

// a) Permita a um usuário entrar com as informações de um carro e depois exiba o carro cadastrado em tela.

const cadastraCarro = (carros, coresDisponiveis) => {
  const marca = prompt('Marca do carro:');
  const ano = parseInt(prompt('Ano do carro:'));
  let cor;

  while (!cor) {
    const corDigitada = prompt(
      'Digite a cor do carro:' + coresDisponiveis
    ).toLowerCase();
    if (coresDisponiveis.includes(corDigitada)) {
      cor = corDigitada;
    }
  }

  const carro = {
    marca,
    ano,
  };

  carros.push(carro);
};

// b) Agora permita cadastrar múltiplos carros e salve os dados de cada um em um array de carros.
// Para sair do cadastro usuário deve escolher uma opção diferente de “S”. No final exiba os dados dos carros salvos.

function desejaContinuar() {
  let queroContinuar = 'S';
  const coresDisponiveis = ['Prata', 'Preta', 'Branca', 'Cinza'];
  const carros = [];

  while (queroContinuar === 'S') {
    cadastraCarro(carros, coresDisponiveis);
    queroContinuar = prompt('Deseja continuar? S/N').toUpperCase();
  }

  return carros;
}

console.log(desejaContinuar());
