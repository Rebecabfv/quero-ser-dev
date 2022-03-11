class Carro {
  #modelo;
  #tipoDeCombustível;

  constructor(
    cor,
    marca,
    modelo,
    capacidadeDoTanque,
    volumeAtualEmTanque,
    tipoDeCombustível
  ) {
    this.cor = cor;
    this.marca = marca;
    this.modelo = modelo;
    this.capacidadeDoTanque = capacidadeDoTanque;
    this.volumeAtualEmTanque = volumeAtualEmTanque;
    this.tipoDeCombustível = tipoDeCombustível;
  }

  get modelo() {
    return this.#modelo;
  }

  set modelo(modelo) {
    this.#modelo =
      modelo === "sedan" || modelo === "hatch"
        ? modelo
        : "Digite um modelo válido";
  }

  get tipoDeCombustível() {
    return this.#tipoDeCombustível;
  }

  set tipoDeCombustível(tipoDeCombustível) {
    this.#tipoDeCombustível =
      tipoDeCombustível === "gasolina" ||
      tipoDeCombustível === "alcool" ||
      tipoDeCombustível === "flex"
        ? tipoDeCombustível
        : "Digite um tipo de combustível válido (gasolina, alcool ou flex)";
  }

  abastecer(quantidadeParaAbastecer, tipoDeCombustível) {
    // método abastecer que respeite o tipo de combustível que o automóvel
    // aceita e a capacidade máxima de litros.

    if (tipoDeCombustível === this.#tipoDeCombustível) {
      const quantidadeQuePodeAbastecer =
        this.capacidadeDoTanque - this.volumeAtualEmTanque;
      if (quantidadeParaAbastecer <= quantidadeQuePodeAbastecer) {
        this.volumeAtualEmTanque += quantidadeParaAbastecer;
        return;
      }
      this.volumeAtualEmTanque = this.volumeAtualEmTanque;
      return;
    }
    return;
  }

  calculaPrecoAbastecimento(quantidadeParaAbastecer, tipoDeCombustível) {
    if (tipoDeCombustível === "gasolina") {
      const precoGasolina = quantidadeParaAbastecer * 5.62;
      return precoGasolina;
    }
    if (tipoDeCombustível === "alcool") {
      const precoAlcool = quantidadeParaAbastecer * 4.16;
      return precoAlcool;
    }
    // (gasolina = R$ 5,62/L e etanol = R$ 4,16/L)
  }
}

const carroSedan = new Carro("rosa", "KA", "sedan", 30, 0, "gasolina");
console.log(carroSedan);

carroSedan.abastecer(10, "gasolina");
console.log(carroSedan);

// carroSedan.abastecer(30, "gasolina");
// console.log(carroSedan);

console.log(carroSedan.calculaPrecoAbastecimento(10, "alcool"));
