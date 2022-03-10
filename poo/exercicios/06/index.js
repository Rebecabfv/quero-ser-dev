// 6. Crie uma classe CNH que tenha como propriedades país e idade que, por padrão, deve ser maior ou igual a 18, 16 se for igual a US ou CA
// e 21 se corresponder a CH ou RU. Se o país for BR deve também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).

class CNH {
  constructor(pais, idade, categoria) {
    this.pais = pais;
    this.pais === "BR" && idade >= 18
      ? (this.categoria = categoria)
      : "Não necessita de categoria";
    this.idade = this.#validaIdade(pais, idade);

    // idade >= 18 todos
    // idade >= 16 -> US ou CA
    // idade >= 21 -> CH ou RU
    // pais == BR -> informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE)
  }

  #validaIdade(pais, idade) {
    if (idade >= 16 && (pais == "US" || pais == "CA")) {
      return idade;
    }
    if (idade >= 18 && (!pais == "CH" || !pais == "RU")) {
      return idade;
    }
    if (idade >= 21 && (pais == "CH" || pais == "RU")) {
      return idade;
    }

    return "Idade não pode ter cnh";
  }
}

const motorista = new CNH("BR", 19, "A");
console.log(motorista);
