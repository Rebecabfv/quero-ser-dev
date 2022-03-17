// Construa uma classe Programa com as propriedades duracao e generos
// (ação, comédia, suspense, drama, terror) e duas classes que herdam
// desta (Seriado e Filme). A classe Seriado deve ter numeroDeEpisodios
//  (de 1 a n), anoDeInicio e anoDeFim. Já a classe Filme precisa ter
// a duracao (em minutos).

class Programa {
  #generosDisponiveis;
  #genero;

  constructor(duracao, genero = []) {
    this.#generosDisponiveis = [
      "ação",
      "comédia",
      "suspense",
      "drama",
      "terror",
    ];
    this.duracao = duracao;
    this.genero = genero;
  }

  get genero() {
    return this.#genero;
  }
  set genero(genero) {
    this.#genero = genero.filter((genero) =>
      this.#generosDisponiveis.includes(genero)
    );
  }
}

class Seriado extends Programa {
  #numeroDeEpisodios;
  #anoDeInicio;
  #anoDeFim;

  constructor(duracao, genero, numeroDeEpisodios, anoDeInicio, anoDeFim) {
    super(duracao, genero);
    this.numeroDeEpisodios = numeroDeEpisodios;
    this.anoDeInicio = anoDeInicio;
    this.anoDeFim = anoDeFim;
  }

  get numeroDeEpisodios() {
    return this.#numeroDeEpisodios;
  }

  set numeroDeEpisodios(numeroDeEpisodios) {
    this.#numeroDeEpisodios = numeroDeEpisodios >= 1 ? numeroDeEpisodios : 1;
  }

  get anoDeInicio() {
    return this.#anoDeInicio;
  }

  set anoDeInicio(anoDeInicio) {
    this.#anoDeInicio = !isNaN(anoDeInicio) ? anoDeInicio : 0;
  }

  get anoDeFim() {
    return this.#anoDeFim;
  }

  set anoDeFim(anoDeFim) {
    this.#anoDeFim = !isNaN(anoDeFim)
      ? anoDeFim > this.#anoDeInicio
        ? anoDeFim
        : this.#anoDeInicio
      : 0;
  }
}

class Filme extends Programa {
  constructor(duracao, generos) {
    super(duracao, generos);
    const minutosExcedentesDeHoras = this.duracao % 60;
    const horas = this.duracao - minutosExcedentesDeHoras;

    this.duracao = `${horas / 60}h ${minutosExcedentesDeHoras}m`;
  }
}

const sbt = new Programa(5, ["ação", "comédia", "romance"]);

const see = new Seriado(5, ["ação"], 2, 2022, 2022);

console.log(sbt);
console.log(see);
