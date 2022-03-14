// Faça uma classe Perfil que tem as seguintes informações:  nome,
// avatar (foto de perfil) e tema. Utilize acessors (get/set) para
// garantir que o tema só pode ser "light" ou "dark" e que a foto de
// perfil deve ser uma url (iniciada com http ou https).

class Perfil {
  #avatar;
  #tema;
  #temasDisponiveis;

  constructor(nome, avatar, tema) {
    this.#temasDisponiveis = ["light", "dark"];
    this.nome = nome;
    this.avatar = avatar;
    this.tema = tema;
  }

  get avatar() {
    return this.#avatar;
  }

  set avatar(avatar) {
    const primeiraParte = avatar.split(":")[0];
    this.#avatar =
      primeiraParte === "http" || primeiraParte === "https"
        ? avatar
        : "Incorreto";
  }

  get tema() {
    return this.#tema;
  }

  set tema(tema) {
    this.#tema = this.#temasDisponiveis.includes(tema)
      ? tema
      : "Tema indisponível";
  }
}

const rebeca = new Perfil(
  "Rebeca",
  "https://class.letscode.com.br/apps/chat",
  "dark"
);

console.log(rebeca);
