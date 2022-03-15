// Faça uma classe SmartWatch com a contagem dos passos diários
//  de uma pessoa (pedômetro). Garanta utilizando acessors (get/set)
//  que os passos apenas podem ser incrementados e um
// método resetOnMidnight() que reseta os passos para 0.

class SmartWatch {
  #passosDiarios;
  #horarioAtual;

  constructor(passosDiarios) {
    this.passosDiarios = passosDiarios;
    const data = new Date();
    this.#horarioAtual = data.getHours();
  }

  get passosDiarios() {
    return this.#passosDiarios;
  }

  set passosDiarios(passosDiarios) {
    if (this.#passosDiarios === undefined) {
      this.#passosDiarios = passosDiarios;
      return;
    }
    if (this.#passosDiarios !== undefined) {
      this.#passosDiarios =
        passosDiarios + this.#passosDiarios > this.#passosDiarios
          ? passosDiarios + this.#passosDiarios
          : "passos nao pode ser decrementado";
      return;
    }
  }

  resetOnMidnight() {
    this.#passosDiarios = 0;
    // Quando for meia noite ele zera a contagem de passos
    if (this.#horarioAtual === 24) {
      this.#passosDiarios = 0;
    }
  }
}

const relogio = new SmartWatch(4);

console.log(relogio.passosDiarios);
console.log(relogio);
relogio.resetOnMidnight();
console.log(relogio);
relogio.passosDiarios = 5;
console.log(relogio);
relogio.passosDiarios = 5;
console.log(relogio);
relogio.resetOnMidnight();
console.log(relogio);
