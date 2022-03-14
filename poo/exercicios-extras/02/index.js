// Faça uma classe SmartWatch com a contagem dos passos diários
//  de uma pessoa (pedômetro). Garanta utilizando acessors (get/set)
//  que os passos apenas podem ser incrementados e um
// método resetOnMidnight() que reseta os passos para 0.

class SmartWatch {
  #passosDiarios;

  constructor(passosDiarios) {
    this.passosDiarios = passosDiarios;
  }

  get passosDiarios() {
    return this.#passosDiarios;
  }
}
