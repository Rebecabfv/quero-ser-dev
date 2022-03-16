class Pessoa {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  registraPresenca() {
    console.log("Pessoa não tem presença");
  }
}

class Aluno extends Pessoa {
  constructor(nome, email, materiaAtual) {
    super(nome, email), (this.materiaAtual = materiaAtual);
  }

  registraPresenca() {
    console.log("Aluno está presente na aula atual");
  }
}

// Se eu nao quero adicionar nenhum atributo nao precisa escrever o constructor novamente
class Professor extends Pessoa {
  registraPresenca() {
    console.log("Prof fez chamada");
  }
}

const clarisse = new Pessoa("Clarisse", "clarisse@gmail.com");
const maria = new Aluno("Rebeca", "re@gmail.com", "POO");
const larissa = new Professor("Larissa", "larissa@letcode.com");

console.log(maria);
console.log(larissa);
clarisse.registraPresenca();
maria.registraPresenca();
larissa.registraPresenca();
