// Faça um jogo de pedra, papel e tesoura (jokenpô). As regras são as seguintes:

// Papel ganha de pedra
// Pedra ganha de tesoura
// Tesoura ganha de papel

// Para jogar, o jogador escolherá uma das três opções disponíveis (papel, pedra ou tesoura) e o computador terá um destes valores sorteados automaticamente.
// Ao fim de cada partida será dada uma mensagem avisando se o jogador ganhou ou perdeu e também será atualizado o placar de vitórias e derrotas do jogador.
// Dica: para sortearmos n valores aleatórios podemos fazer Math.random() * n e passar o resultado para Math.floor().

let desejaContinuar = 'S';

let placarPc = 0;
let placarUsuario = 0;

while (desejaContinuar === 'S') {
  const seuDesejo = prompt(
    'Digite qual deseja: pedra, papel ou tesoura'
  ).toLowerCase();

  const resultado = Math.floor(Math.random() * 3);

  let partidaComputador = '';

  if (resultado === 0) {
    partidaComputador = 'pedra';
  }
  if (resultado === 1) {
    partidaComputador = 'tesoura';
  }
  if (resultado === 2) {
    partidaComputador = 'papel';
  }

  // console.log(partidaComputador);

  if (seuDesejo == partidaComputador) {
    alert('Houve empate! Você e o computador escolheram ' + seuDesejo);
  }

  if (seuDesejo === 'pedra') {
    if (partidaComputador === 'tesoura') {
      placarUsuario += 1;
      alert(
        'Você venceu! Placar usuário: ' +
          placarUsuario +
          ' Placar PC: ' +
          placarPc
      );
    }
    if (partidaComputador === 'papel') {
      placarPc += 1;
      alert(
        'Você perdeu! Placar usuário: ' +
          placarUsuario +
          ' Placar PC: ' +
          placarPc
      );
    }
  }

  if (seuDesejo === 'papel') {
    if (partidaComputador === 'pedra') {
      placarUsuario += 1;
      alert(
        'Você venceu! Placar usuário: ' +
          placarUsuario +
          ' Placar PC: ' +
          placarPc
      );
    }
    if (partidaComputador === 'tesoura') {
      placarPc += 1;
      alert(
        'Você perdeu! Placar usuário: ' +
          placarUsuario +
          ' Placar PC: ' +
          placarPc
      );
    }
  }

  if (seuDesejo === 'tesoura') {
    if (partidaComputador === 'papel') {
      placarUsuario += 1;
      alert(
        'Você venceu! Placar usuário: ' +
          placarUsuario +
          ' Placar PC: ' +
          placarPc
      );
    }
    if (partidaComputador === 'pedra') {
      placarPc += 1;
      alert(
        'Você perdeu! Placar usuário: ' +
          placarUsuario +
          ' Placar PC: ' +
          placarPc
      );
    }
  }

  desejaContinuar = prompt('Deseja continuar? S/N').toUpperCase();

  if (desejaContinuar !== 'S') {
    if (placarUsuario > placarPc) {
      alert(
        'Você venceu o jogo! Placar usuário: ' +
          placarUsuario +
          ' Placar PC: ' +
          placarPc
      );
    }
    if (placarUsuario === placarPc) {
      alert(
        'Houve empate no jogo! Placar usuário: ' +
          placarUsuario +
          ' Placar PC: ' +
          placarPc
      );
    }
    if (placarUsuario < placarPc) {
      alert(
        'Você perdeu o jogo! Placar usuário: ' +
          placarUsuario +
          ' Placar PC: ' +
          placarPc
      );
    }
  }
}
