// const nome = {
//   nomeCompleto: "Rebeca Baptista Fonseca Viana",
//   email: "re.bfviana@gmail.com",
//   get primeiroNome() {
//     return this.nomeCompleto.split(" ")[0];
//   },
// };

function constroiPessoa(nomeCompleto, email) {
  return {
    nomeCompleto,
    email,
    get primeiroNome() {
      return this.nomeCompleto.split(" ")[0];
    },
  };
}

const pessoa1 = constroiPessoa(
  "Rebeca Baptista Fonseca Viana",
  "re.bfviana@gmail.com"
);
const pessoa2 = constroiPessoa(
  "Rebeca Baptista Fonseca Viana",
  "re.bfviana@gmail.com"
);

console.log(pessoa1);
console.log(pessoa1.primeiroNome);
console.log(pessoa2.primeiroNome);
