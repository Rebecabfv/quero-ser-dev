// Você deverá escrever um programa que permita a um estacionamento saber o valor final a se cobrar por um carro estacionado.

// Quando carro der entrada ou saída no estabelecimento, sua placa deverá ser fornecida ao sistema, caso não houver nenhuma outra
// entrada em aberto para aquela placa deverá ser exibida a mensagem: "Entrada do veículo de placa: ", caso contrário deverá ser exibida a mensagem:

// Saída do veículo de placa: PLACA

// Tempo no estabelecimento: TEMPO

// Valor cobrado: VALOR
// onde PLACA, TEMPO e VALOR devem ser substituídos pelos valores correspondentes.

// Para facilitar podemos apenas informar as horas de entrada ou saída em cada momento, após identificarmos se o carro está dando entrada ou saída no estacionamento.
// Use a seguinte tabela de preços abaixo para calcular os valores a ser pagos pelos motoristas:

// Tabela de preços
// Até 1 hora : R$ 5,00
// Até 2 horas: R$ 8,00
// Até 3 horas: R$ 12,00
// A partir de 3 horas: R$ 12,00 + R$ 2,50 por hora adicional

const placas = [
  {
    placa: 'OPO4570',
    horarioInicial: 6,
  },
  {
    placa: 'EDO7856',
    horarioInicial: 8,
  },
];

let desejaContinuar = 'S';

while (desejaContinuar === 'S') {
  const placaDesejada = prompt('Placa do carro:').toUpperCase();

  function cadastraTempo(tempo) {
    let valor = 0;
    if (tempo <= 1) {
      return (valor = 5);
    }
    if (tempo <= 2) {
      return (valor = 8);
    }
    if (tempo <= 3) {
      return (valor = 12);
    }
    if (tempo > 4) {
      const horaAdicional = (tempo - 3) * 2.5;
      return (valor = 12 + horaAdicional);
    }
  }

  const procuraPlaca = placas.find((placa) => placa.placa === placaDesejada);

  const carroEstacionado = placas.map((veiculo) => {
    if (veiculo.placa === placaDesejada) {
      const horarioFinal = parseInt(
        prompt('Digite o horario de saída (em horas): ')
      );
      const tempo = horarioFinal - veiculo.horarioInicial;

      veiculo = {
        ...veiculo,
        valor: cadastraTempo(tempo),
        tempo: tempo,
      };

      const mensagem = console.log(
        ` - Saída do veículo de placa: ${veiculo.placa} \n - Tempo no estabelecimento:  ${veiculo.tempo} horas\n - Valor cobrado: R$ ${veiculo.valor}`
      );
      return mensagem;
    }
  });

  if (procuraPlaca === undefined) {
    const horarioInicial = parseInt(
      prompt('Digite o horario de entrada (em horas): ')
    );
    placas.push({
      placa: placaDesejada,
      horarioInicial: horarioInicial,
    });
  }

  console.log(placas);
  console.log(carroEstacionado);
  desejaContinuar = prompt(
    'Deseja dar entrada ou saída de outro veiculo? S/N'
  ).toLocaleUpperCase();
}
