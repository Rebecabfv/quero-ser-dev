// 11. Um parque de diversões tem 3 atrações principais: o carrossel, piscina de bolinhas e montanha-russa.

// Para poder participar de uma atração a pessoa deve cumprir as seguintes condições:

// Carrossel: altura mínima de 1,00m e idade mínima de 3 anos.
// Piscina de bolinhas: idade entre 4 e 9 anos e máximo de 1,30m de altura.
// Montanha-russa: altura mínima de 1,10m.

// O fiscal de cada atração verificará o ano de nascimento da pessoa e altura para liberar o acesso para uma pessoa.
// Faça uma função que receba o ano de nascimento e altura da pessoa e informe quais as atrações que a pessoa pode participar.

function verificaAtracoes(anoDeNascimento, altura) {
  const idade = 2021 - anoDeNascimento;
  let mensagem = '';
  if (altura >= 1 && idade >= 3) {
    mensagem = mensagem + 'Carrosel ';
  }

  if (altura > 1.1) {
    mensagem = mensagem + ' Montanha-russa ';
  }

  if (altura < 1.3 && idade >= 4 && idade <= 9) {
    mensagem = mensagem + ' Piscina de bolinhas';
  }

  if (mensagem === '') {
    return 'Você não pode participar de nenhum brinquedo do parque';
  }

  return mensagem;
}

const altura = Number(prompt('Entre com sua altura:'));
const anoDeNascimento = Number(prompt('Entre com seu ano de nascimento:'));
console.log(verificaAtracoes(anoDeNascimento, altura));
