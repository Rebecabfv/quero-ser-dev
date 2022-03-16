// Para construir as seguintes classes:
//   Relogio: + calcula(), + acessaInternet(), + registraPassos()
//   Computador: + calcula(), + acessaInternet(), + tiraFoto()
//   Celular: + calcula(), + ilumina(), + acessaInternet(), + tiraFoto(), + registraPassos()

class Dispositivo {
  calcula() {}
}

function MixinIlumina(classe) {
  return class extends classe {
    ilumina() {
      console.log("Ilumina");
    }
  };
}

function MixinAcessaInternet(classe) {
  return class extends classe {
    acessaInternet() {
      console.log("Acessa internet");
    }
  };
}

function MixinTiraFoto(classe) {
  return class extends classe {
    tiraFoto() {
      console.log("Tira foto");
    }
  };
}

function MixinRegistraPassos(classe) {
  return class extends classe {
    registraPassos() {
      console.log("Registra Passos");
    }
  };
}

class Relogio extends MixinAcessaInternet(MixinRegistraPassos(Dispositivo)) {}
const relogio = new Relogio();

class Computador extends MixinAcessaInternet(MixinTiraFoto(Dispositivo)) {}

class Celular extends MixinIlumina(
  MixinAcessaInternet(MixinTiraFoto(MixinRegistraPassos(Dispositivo)))
) {}

console.log(relogio);
relogio.acessaInternet();
