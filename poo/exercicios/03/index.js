// Faça um objeto pessoa com as propriedades nomeCompleto, email e primeiroNome (com get).

const nome = {
  nomeCompleto: "Rebeca Baptista Fonseca Viana",
  email: "re.bfviana@gmail.com",
  get primeiroNome() {
    return this.nomeCompleto.split(" ")[0];
  },
};

console.log(nome.primeiroNome);
