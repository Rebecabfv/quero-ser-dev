class Animal {
  constructor(especie, idadeEmMeses) {
    this.especie = especie;
    this.idadeEmMeses = idadeEmMeses;
  }

  comer() {
    console.log("NHAC");
  }
}

function MixinVoa(superClasse) {
  return class extends superClasse {
    voa() {
      console.log(`${this.especie} voou`);
    }
  };
}

function MixinAnda(superClasse) {
  return class extends superClasse {
    anda() {
      console.log(`${this.especie} andou`);
    }
  };
}

class Ave extends MixinAnda(MixinVoa(Animal)) {}

class AvesTerrestres extends MixinAnda(Animal) {}

const aguia = new Ave("aguia", 8);
const pinguim = new AvesTerrestres("pinguim", 7);

console.log(pinguim, aguia);

aguia.anda();
aguia.voa();

pinguim.anda();
