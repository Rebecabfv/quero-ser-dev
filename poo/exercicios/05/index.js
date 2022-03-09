class Boletim {
  constructor(nome, ano, semestre, medias = []) {
    this.nome = nome;
    this.ano = ano;
    this.semestre = semestre;
    this.medias = medias;
  }
}

const aluno = new Monitor("Rebeca Baptista", 2020, 5, [2, 3, 4, 5, 8, 2]);
console.log(aluno);

// const tv = {
//   canal: {
//     1: "Globo",
//     2: "SBT",
//     3: "Band",
//   },
