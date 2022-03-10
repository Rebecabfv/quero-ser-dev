// Faça uma classe Boletim para uma faculdade com as propriedades nome (do aluno), ano (maior que 1964),
// semestre(de 1 a 14) e um array medias com as médias de 6 máterias.

// Solucao que apenas garante validacao no instanciamento do objeto
// class Boletim {
//   constructor(nome, ano, semestre, medias = []) {
//     this.nome = nome;
//     this.ano = ano > 1964 ? ano : "invalido";
//     this.semestre = semestre >= 1 && semestre <= 14 ? semestre : "invalido";
//     this.medias = medias;
//   }
// }

class Boletim {
  #semestre;
  #ano;

  constructor(nome, ano, semestre, medias = []) {
    this.nome = nome;
    this.#ano = ano;
    this.#semestre = semestre
    this.medias = medias;
  }

  get ano() {
    return this.#ano;
  }

  set ano (ano){
    this.#ano = ano > 1964 ? ano : "invalido";
  }

  get semestre() {
    return this.#semestre;
  }

  get semestre(semestre) {
    this.#semestre = semestre >= 1 && semestre <= 14 ? semestre : "invalido";
  }

}
// Instanciando um novo objeto
const alunaRebeca = new Boletim(
  "Rebeca Baptista Fonseca Viana",
  2022,
  2,
  [8, 9, 10, 8, 8, 7]
);

console.log(alunaRebeca);
