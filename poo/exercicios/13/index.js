class Estabelecimento {
  constructor(id, produtos = [{ nome: "", valor: 0 }]) {
    this.id = id;
    this.produtos = produtos;
  }
}

function MixinPontosParaResgatarPremio(classe) {
  return class extends classe {
    constructor(id, produtos, pontosParaResgatarPremio) {
      super(id, produtos);
      this.pontosParaResgatarPremio = pontosParaResgatarPremio;
    }
  };
}

function MixinResgataPremio(classe) {
  return class extends classe {
    resgataPremio(cartela) {
      return cartela;
    }
  };
}

function MixinCompraRemedio(classe) {
  return class extends classe {
    compraRemedio(prescricao) {
      if (prescricao === this.produtos) {
        return console.log("compra produto");
      }
      return;
    }
  };
}

function MixinPedeBebida(classe) {
  return class extends classe {
    pedeBebida(idade, produto) {
      if (idade >= 18) {
        console.log(`Pode vender o ${produto}`);
      }
    }
  };
}

class Restaurante extends MixinPontosParaResgatarPremio(
  MixinResgataPremio(Estabelecimento)
) {}

class Farmacia extends MixinCompraRemedio(Estabelecimento) {}

class Bar extends MixinPontosParaResgatarPremio(
  MixinResgataPremio(MixinPedeBebida(Estabelecimento))
) {}

const drogasil = new Farmacia(
  "drograsil",
  [{ nome: "nimesulida", valor: 5 }],
  5
);

console.log(drogasil);
console.log(drogasil.resgataPremio(5));
console.log(drogasil.compraRemedio("nimesulida"));
