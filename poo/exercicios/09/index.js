// Construa uma classe Veiculo que tem como propriedades rodas (1 a n),
// usaCombustivel (true/false), uma classe Carro (tipoDecombustivel: 'gasolina',
// 'álcool', 'flex') que herda de Veiculo e Bicicleta
// (infantil: true/false - tem que ter mais que 2 rodas) que também herda as
// características de Veiculo.

class Veiculo {
  #rodas;
  #usaCombustivel;

  constructor(rodas, usaCombustivel) {
    this.rodas = rodas;
    this.usaCombustivel = usaCombustivel;
  }

  get rodas() {
    return this.#rodas;
  }

  set rodas(rodas) {
    this.#rodas = rodas >= 1 ? rodas : 1;
  }

  get usaCombustivel() {
    return this.#usaCombustivel;
  }

  set usaCombustivel(usaCombustivel) {
    this.#usaCombustivel =
      typeof usaCombustivel === "boolean" ? usaCombustivel : true;
  }
}

class Carro extends Veiculo {
  #tipoDeCombustivel;
  #tiposCombustivelDisponivel;

  constructor(rodas, usaCombustivel, tipoDeCombustivel) {
    super(rodas, usaCombustivel);
    this.tipoDeCombustivel = tipoDeCombustivel;
    this.#tiposCombustivelDisponivel = ["gasolina", "álcool", "flex"];
  }

  get tipoDeCombustivel() {
    return this.#tipoDeCombustivel;
  }

  set tipoDeCombustivel(tipoDeCombustivel) {
    this.#tipoDeCombustivel = this.#tiposCombustivelDisponivel.includes(
      tipoDeCombustivel
    )
      ? tipoDeCombustivel
      : "Tipo de combustivel indisponivel";
  }
}

class Bicicleta extends Veiculo {
  #ehInfantil;

  constructor(rodas, usaCombustivel, ehInfantil) {
    super(rodas, usaCombustivel);
    this.ehInfantil = ehInfantil;
  }

  get ehInfantil() {
    return this.#ehInfantil;
  }

  set ehInfantil(ehInfantil) {
    this.#ehInfantil = typeof ehInfantil === "boolean" ? ehInfantil : true;
    if (ehInfantil == true) {
      this.rodas += 2;
    }
  }
}

const veiculo = new Veiculo(2, false);
const carro = new Veiculo(2, true, "gasolina");
const bike = new Bicicleta(2, true, false);

console.log(veiculo);
console.log(carro);
console.log(bike);
