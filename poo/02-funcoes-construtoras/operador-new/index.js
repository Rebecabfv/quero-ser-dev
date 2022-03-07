function ConstroiPessoa(nomeCompleto, email) {
  this.nomeCompleto = nomeCompleto;
  this.email = email;
}

const pessoa1 = new ConstroiPessoa(
  "Rebeca Baptista Fonseca Viana",
  "re.bfviana@gmail.com"
);
const pessoa2 = new ConstroiPessoa(
  "Roberta Baptista Fonseca Viana",
  "ro.bfviana@gmail.com"
);

console.log(pessoa1);
console.log(pessoa2);
