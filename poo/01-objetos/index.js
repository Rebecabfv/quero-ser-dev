const carro = {
  marca: "Ford",
  modelo: "KA",
  capacidadeTotalDoTanqueEmLitros: 30,
  capacidadeAtualoTanqueEmLitros: 5,
  //   liga: function () {
  //     console.log("ligou");
  //   },
  //   liga: () => {
  //     console.log("ligou");
  //   },
  // Short syntax
  liga() {
    if (this.capacidadeAtualoTanqueEmLitros > 0) {
      console.log("Ligou carro");
      return;
    }

    console.log("Gasolina insuficiente");
  },
};

carro.liga();
