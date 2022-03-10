class Carro {
  #marca;
  #marcasDisponiveis;

  constructor(marca, modelo) {
    this.#marcasDisponiveis = ["Ford", "Honda", "Volkswagen"];
    this.modelo = modelo;
    this.#marca = this.#validaMarca(marca);
  }

  get marca() {
    return this.#marca;
  }

  set marca(novaMarca) {
    this.#marca = this.#validaMarca(novaMarca);
  }

  #validaMarca(novaMarca) {
    const marcaAtualOuPadrao = this.#marcasDisponiveis.includes(this.#marca)
      ? this.#marca
      : "Não disponível";

    // "quebrar o programa" e dar um erro no sistema
    if (marcaAtualOuPadrao === "Não disponível") {
      throw new Error("Erro na declaração");
    }
    return this.#marcasDisponiveis.includes(novaMarca)
      ? novaMarca
      : marcaAtualOuPadrao;
  }
}

// Instanciando um novo objeto da classe Carro
const carro1 = new Carro("KIA", "Ka");
console.log(carro1.marca);

carro1.marca = "Ford";
console.log(carro1.marca);

carro1.marca = "Subaru";
console.log(carro1.marca);
console.log(carro1);
