// Crie uma classe Time que tenha como atributo o nome do país, nome do esporte e a pontuação dele em um torneio.
// Sua pontuação pode ser acrescida por um método pontua que recebe como parâmetro "W" para vitória (+3 pontos), "L"
//  para derrota (+0 pontos) e "D" para empate (+1 ponto).

class Time {
  #pontuacao;

  constructor(pais, esporte, pontuacao) {
    this.pais = pais;
    this.esporte = esporte;
    this.pontuacao = pontuacao;
  }

  get pontuacao() {
    return this.#pontuacao;
  }

  set pontuacao(pontuacao) {
    this.#pontuacao = isNaN(pontuacao) ? 0 : pontuacao;
  }

  pontua(condicaoDoJogo) {
    //  "W" para vitória (+3 pontos), "L" para derrota (+0 pontos) e "D" para empate (+1 ponto).
    if (condicaoDoJogo === "W") {
      this.#pontuacao += 3;
      return;
    }
    if (condicaoDoJogo === "L") {
      this.#pontuacao += 0;
      return;
    }
    if (condicaoDoJogo === "D") {
      this.#pontuacao += 1;
      return;
    }
    console.log("Letra inválida!");
    return;
  }
}

const brasil = new Time("Brasil", "futebol", 14);
console.log(brasil);

brasil.pontua("W");
console.log(brasil);
