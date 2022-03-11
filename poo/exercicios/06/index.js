// 6. Crie uma classe CNH que tenha como propriedades país e idade que, por padrão, deve ser maior ou igual a 18, 16 se for igual a US ou CA
// e 21 se corresponder a CH ou RU. Se o país for BR deve também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).

// idade >= 18 todos
// idade >= 16 -> US ou CA
// idade >= 21 -> CH ou RU
// pais == BR -> informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE)

class CNH {
  #categoriaExistente;
  #idade;
  #idadesMinimasPorPais;
  #categoria;

  constructor(pais, idade, categoria) {
    this.#categoriaExistente = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "AB",
      "AC",
      "AD",
      "AE",
    ];
    this.#idadesMinimasPorPais = {
      BR: 18,
      CA: 16,
      CH: 21,
      US: 16,
      RU: 21,
    };
    this.pais = pais;
    this.idade = idade;
    this.categoria = categoria;

    // this.pais === "BR" && idade >= 18
    //   ? (this.categoria = categoria)
    //   : "Não necessita de categoria";
  }

  get idade() {
    return this.#idade;
  }

  set idade(idadeNova) {
    const idadeMinimaEncontradaOuValorPadrao = this.#idadesMinimasPorPais[
      this.pais
    ]
      ? this.#idadesMinimasPorPais[this.pais]
      : 18;

    this.#idade =
      idadeNova >= idadeMinimaEncontradaOuValorPadrao
        ? idadeNova
        : "idade inválida";
  }

  get categoria() {
    return this.#categoria;
  }

  set categoria(categoria) {
    // const verificaCategoria = this.#categoriaExistente.includes(categoria)
    //   ? categoria
    //   : "Categoria inválida";

    this.#categoria =
      this.pais === "BR" && this.#idade >= 18
        ? this.#categoriaExistente.includes(categoria)
          ? categoria
          : "Categoria inválida"
        : "Não necessita de categoria";
  }
}

const motorista = new CNH("CA", 19, "AB");
console.log(motorista);
