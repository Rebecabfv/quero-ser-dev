// 2. Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga,
// desliga, mudaDeCanal e aumentaVolume, diminuiVolume.

const tv = {
  canal: {
    1: "Globo",
    2: "SBT",
    3: "Band",
  },
  volume: 20,
  ligada: true,
  liga() {
    this.ligada = true;
  },
  desliga() {
    this.ligada = false;
  },
  mudaDeCanal(canal) {
    if (this.liga) {
      console.log("TV está desligada, não sendo possível alterar o canal.");
      return;
    }
    this.canal = this.canal[canal];
  },
  aumentaVolume() {
    this.volume += 2;
  },
  diminuiVolume() {
    this.volume -= 2;
  },
};

tv.desliga();

tv.mudaDeCanal(2);

tv.diminuiVolume();
tv.diminuiVolume();
console.log(tv);
