// 2. Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, 
// desliga, mudaDeCanal e aumentaVolume, diminuiVolume.

const tv = {
  canal = "Globo",
  volume = 20,
  ligada = true,
  liga() {
    this.ligada = true;
  },
  desliga() {
    this.ligada = falso;
  },
  mudaDeCanal (){
    this.canel = "SBT";
  },
  aumentaVolume(){
    this.volume += 2;
  },
  diminuiVolume(){
    this.volume -= 2;
  },
}



// ["Globo","SBT", "Band"],