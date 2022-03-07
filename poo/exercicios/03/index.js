// Faça um objeto pessoa com as propriedades nomeCompleto, email e primeiroNome (com get).

const nome = {
  nomeCompleto: "Rebeca Baptista Fonseca Viana",
  email: "re.bfviana@gmail.com",
  get primeiroNome() {
    return this.nomeCompleto.split(" ")[0];
  },
  get ultimoNome() {
    return this.nomeCompleto.split(" ").reverse()[0];
  },
};

console.log(nome.primeiroNome);
console.log(nome.ultimoNome);
