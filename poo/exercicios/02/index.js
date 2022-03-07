// 2. Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga,
// desliga, mudaDeCanal e aumentaVolume, diminuiVolume.

const tv = {
  canal: {
    1: "Globo",
    2: "SBT",
    3: "Band",
  },
  volume: 0,
  // volumeMaximo: 100,
  ligada: true,
  liga() {
    this.ligada = true;
  },
  desliga() {
    this.ligada = false;
  },
  mudaDeCanal(canal) {
    if (!this.ligada) {
      console.log("TV está desligada, não sendo possível alterar o canal.");
      return;
    }
    this.canal = this.canal[canal];
  },
  aumentaVolume(incrementa = 1) {
    if (!this.ligada) {
      return;
    }
    if (this.volume + incrementa < 100) {
      this.volume += incrementa;
    }
  },
  diminuiVolume(decremento = 1) {
    if (!this.ligada) {
      return;
    }

    if (this.volume - decremento > 0) {
      this.volume -= decremento;
    }
  },
};

tv.desliga();

tv.mudaDeCanal(2);

tv.diminuiVolume();
tv.diminuiVolume();
console.log(tv);
