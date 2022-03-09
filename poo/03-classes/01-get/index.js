const usuario = {
  nome: "Zé da Silva",
  email: "zesilva123@outlook.com",
  // Get gera uma propriedade a partir de outra propriedade
  get nomeDeUsuario() {
    const emailArray = this.email.split("@");
    return emailArray[0];
    // return this.email.split("@")[0];
  },
  cumprimenta() {
    console.log("Olá" + this.nome);
  },
};

console.log(usuario);
console.log(usuario.nomeDeUsuario);
