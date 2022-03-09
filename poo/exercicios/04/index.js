class Tv {
  constructor(canal = 2, volume = 0) {
    this.canaisDiponiveis = {
      1: "Globo",
      2: "SBT",
      3: "Band",
    };
    this.canal = this.canaisDiponiveis[canal];
    this.volume = volume;
    this.ligada = false;
  }

  liga() {
    this.ligada = true;
  }
  desliga() {
    this.ligada = false;
  }
  mudaDeCanal(canal) {
    if (!this.ligada) {
      console.log("TV está desligada, não sendo possível alterar o canal.");
      return;
    }
    this.canal = this.canaisDiponiveis[canal];
  }
  aumentaVolume(incrementa = 1) {
    if (!this.ligada) {
      return;
    }
    if (this.volume + incrementa < 100) {
      this.volume += incrementa;
    }
  }
  diminuiVolume(decremento = 1) {
    if (!this.ligada) {
      return;
    }

    if (this.volume - decremento > 0) {
      this.volume -= decremento;
    }
  }
}

const monitor = new Tv(2);
console.log(tv);

// const tv = {
//   canal: {
//     1: "Globo",
//     2: "SBT",
//     3: "Band",
//   },
