class Carro {
  #modelo;
  #tipoDeCombustivel;

  constructor(
    cor,
    marca,
    modelo,
    capacidadeDoTanque,
    volumeAtualEmTanque,
    tipoDeCombustivel
  ) {
    this.cor = cor;
    this.marca = marca;
    this.modelo = modelo;
    this.capacidadeDoTanque = capacidadeDoTanque;
    this.volumeAtualEmTanque = volumeAtualEmTanque;
    this.tipoDeCombustivel = tipoDeCombustivel;
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

  get tipoDeCombustivel() {
    return this.#tipoDeCombustivel;
  }

  set tipoDeCombustivel(tipoDeCombustivel) {
    this.#tipoDeCombustivel =
      tipoDeCombustivel === "gasolina" ||
      tipoDeCombustivel === "alcool" ||
      tipoDeCombustivel === "flex"
        ? tipoDeCombustivel
        : "Digite um tipo de combustível válido (gasolina, alcool ou flex)";
  }

  abastecer(quantidadeParaAbastecer, tipoDeCombustivel) {
    // método abastecer que respeite o tipo de combustível que o automóvel
    // aceita e a capacidade máxima de litros.

    if (tipoDeCombustivel === this.#tipoDeCombustivel) {
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

  calculaPrecoAbastecimento(quantidadeParaAbastecer, tipoDeCombustivel) {
    if (tipoDeCombustivel === "gasolina") {
      const precoGasolina = quantidadeParaAbastecer * 5.62;
      return precoGasolina;
    }
    if (tipoDeCombustivel === "alcool") {
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
