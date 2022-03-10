// Faça uma classe Boletim para uma faculdade com as propriedades nome (do aluno), ano (maior que 1964),
// semestre(de 1 a 14) e um array medias com as médias de 6 máterias.

class Boletim {
  constructor(nome, ano, semestre, medias = []) {
    this.nome = nome;
    this.ano = ano > 1964 ? ano : "invalido";
    this.semestre = semestre >= 1 && semestre <= 14 ? semestre : "invalido";
    this.medias = medias;
  }
}

const aluno = new Boletim("Rebeca Baptista", 2020, 5, [2, 3, 4, 5, 8, 2]);
console.log(aluno);
