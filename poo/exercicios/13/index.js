class Estabelecimento {
  #id;
  constructor(id, produtos = [{ nome: "", valor: 0 }]) {
    this.id = id;
    this.produtos = produtos;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = !isNaN(id) ? id : 0;
  }
}

function MixinPremio(classe) {
  return class extends classe {
    constructor(id, produtos, pontosParaResgatarPremio) {
      super(id, produtos);
      this.pontosParaResgatarPremio =
        pontosParaResgatarPremio > 0 ? pontosParaResgatarPremio : 0;
    }

    resgataPremio(cartela) {
      if (cartela.idDoEstabelecimento !== this.id) {
        console.log("cartela não vale ao estabelecimento!");
        return;
      }
      if (cartela.carimbos >= this.pontosParaResgatarPremio) {
        cartela.carimbos -= this.pontosParaResgatarPremio;
        console.log(
          "Premio resgatado! Agora você tem: " + cartela.carimbos + " carimbos"
        );
        return;
      }
      return console.log(
        "Premio nao pode ser resgatados, pontos insuficientes!"
      );
    }
  };
}

function MixinCompraRemedio(classe) {
  return class extends classe {
    compraRemedio(prescricao, listaDeCompras) {
      const verificaRemedio = prescricao.remedios.filter((remedio) =>
        listaDeCompras.includes(remedio)
      );
      if (verificaRemedio.length !== 0) {
        return console.log("Pode comprar o(s) produto(s): " + verificaRemedio);
      }
      return console.log("Remedio não pode ser comprado ");
    }
  };
}

function MixinPedeBebida(classe) {
  return class extends classe {
    pedeBebida(idade, produto) {
      if (idade >= 18) {
        console.log(`Pode vender o ${produto}`);
        return;
      }
      return console.log("Bebida nao pode ser vendida ");
    }
  };
}

class Cartela {
  constructor(idDoEstabelecimento, carimbos) {
    this.idDoEstabelecimento = idDoEstabelecimento;
    this.carimbos = carimbos;
  }
}

class Prescricao {
  constructor(remedios = []) {
    this.remedios = remedios;
  }
}

class Restaurante extends MixinPremio(Estabelecimento) {}

class Farmacia extends MixinCompraRemedio(Estabelecimento) {}

class Bar extends MixinPremio(MixinPedeBebida(Estabelecimento)) {}

const drogasil = new Farmacia(1, [{ nome: "nimesulida", valor: 5 }]);

const prescricaoRebeca = new Prescricao(["nimesulida", "antibiotico"]);

console.log(drogasil);

drogasil.compraRemedio(prescricaoRebeca, ["nimesulid", "antibiotico"]);

const restaurante = new Restaurante(2, [{ nome: "almoco", valor: 15 }], 10);

const cartela = new Cartela(2, 11);

console.log(restaurante);
console.log(cartela);

restaurante.resgataPremio(cartela);
console.log(cartela);

const bar = new Bar(3, [{ nome: "breja", valor: 10 }], 2);

console.log(bar);

bar.pedeBebida(18, "breja");
