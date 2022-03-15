class Carro {
  #modelo;
  #tipoDeCombustivel;
  #tipoDeCombustivelDisponivel;
  #modeloDisponivel;
  #volumeAtualEmTanque;
  #precosPorLitro;

  constructor(
    cor,
    marca,
    modelo,
    capacidadeDoTanque,
    volumeAtualEmTanque,
    tipoDeCombustivel
  ) {
    this.#modeloDisponivel = ["sedan", "hatch"];
    this.#tipoDeCombustivelDisponivel = ["gasolina", "alcool", "flex"];
    this.#precosPorLitro = {
      gasolina: 5.62,
      alcool: 4.16,
    };
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
    this.#modelo = this.#modeloDisponivel.includes(modelo)
      ? modelo
      : "Digite um modelo válido";
  }

  get tipoDeCombustivel() {
    return this.#tipoDeCombustivel;
  }

  set tipoDeCombustivel(tipoDeCombustivel) {
    this.#tipoDeCombustivel = this.#tipoDeCombustivelDisponivel.includes(
      tipoDeCombustivel
    )
      ? tipoDeCombustivel
      : "Digite um tipo de combustível válido (gasolina, alcool ou flex)";
  }

  get volumeAtualEmTanque() {
    return this.#volumeAtualEmTanque;
  }

  set volumeAtualEmTanque(volumeAtual) {
    this.#volumeAtualEmTanque =
      volumeAtual < this.capacidadeDoTanque ? volumeAtual : "volume inválido";
  }

  abastecer(quantidadeParaAbastecer, tipoDeCombustivel) {
    if (tipoDeCombustivel === this.#tipoDeCombustivel) {
      const quantidadeQuePodeAbastecer =
        this.capacidadeDoTanque - this.volumeAtualEmTanque;
      if (quantidadeParaAbastecer <= quantidadeQuePodeAbastecer) {
        this.volumeAtualEmTanque += quantidadeParaAbastecer;
        console.log(
          `O preço do abastecimento para ${quantidadeParaAbastecer}L de ${tipoDeCombustivel} é de ${this.calculaPrecoAbastecimento(
            quantidadeParaAbastecer,
            tipoDeCombustivel
          )}`
        );
        return;
      }
      this.volumeAtualEmTanque = this.volumeAtualEmTanque;
      return;
    }
    return;
  }

  calculaPrecoAbastecimento(quantidadeParaAbastecer, tipoDeCombustivel) {
    const valor =
      this.#precosPorLitro[tipoDeCombustivel] * quantidadeParaAbastecer;
    const preco = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return preco;
  }
}

const carroSedan = new Carro("rosa", "KA", "sedan", 30, 0, "gasolina");
console.log(carroSedan);

carroSedan.abastecer(10, "gasolina");
console.log(carroSedan);

// carroSedan.abastecer(30, "gasolina");
// console.log(carroSedan);

console.log(carroSedan.calculaPrecoAbastecimento(10, "alcool"));
