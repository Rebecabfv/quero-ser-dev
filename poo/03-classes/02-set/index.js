// nome: Janeiro, Fevereiro, etc
// numeroDoMes = 1-12
// dias: 28,29,30 e 31
class Mes {
  #numeroDoMes;
  #dias;

  constructor(nome, numeroDoMes, dias) {
    this.nome = nome;
    // variavel privada
    this.#numeroDoMes = this.#validaNumeroDoMes(numeroDoMes);
    // this.numeroDoMes = numeroDoMes > 0 && numeroDoMes < 13 ? numeroDoMes : 1;
    this.#dias = this.#validaDias(dias);
  }

  get numeroDoMes() {
    return this.#numeroDoMes;
  }

  set numeroDoMes(numero) {
    this.#numeroDoMes = this.#validaNumeroDoMes(numero);
  }

  #validaNumeroDoMes(numero) {
    return numero > 0 && numero < 13 ? numero : 1;
  }

  get dias() {
    return this.#dias;
  }

  set dias(numero) {
    return this.validaDias(numero);
  }

  #validaDias(numero) {
    return numero > 27 && numero < 32 ? numero : 30;
  }
}

const jan = new Mes("Janeiro", 1, 31);

console.log(jan.numeroDoMes);

jan.numeroDoMes = 5;

console.log(jan.numeroDoMes);
