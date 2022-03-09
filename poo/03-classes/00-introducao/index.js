class Pessoa {
  constructor(nomeCompleto, email) {
    this.nomeCompleto = nomeCompleto;
    this.email = email;
  }

  get primeiroNome() {
    return this.nomeCompleto.split(" ")[0];
  }

  cumprimenta() {
    return "Olá " + this.primeiroNome;
  }
}

const pessoa1 = new Pessoa(
  "Rebeca Baptista Fonseca Viana",
  "re.bfviana@gmail.com"
);
const pessoa2 = new Pessoa(
  "Roberta Baptista Fonseca Viana",
  "ro.bfviana@gmail.com"
);

console.log(pessoa1);
console.log(pessoa2);

console.log(pessoa1.cumprimenta());
