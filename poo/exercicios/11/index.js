// Crie uma classe Livro com as propriedades autor e ano. Crie também
// as classes Ebook e AudioBook que herdam de Livro. Ebook deve ter
// numero de páginas e número de capítulos. Já a classe AudioBook deve
// ter a duração total do áudio em minutos.

class Livro {
  constructor(autor, ano) {
    this.autor = autor;
    this.ano = !isNaN(ano) ? ano : 0;
  }
}

class Ebook extends Livro {
  constructor(autor, ano, numeroPaginas, numeroCapitulos) {
    super(autor, ano);
    this.numeroCapitulos = !isNaN(numeroCapitulos) ? numeroCapitulos : 0;
    this.numeroPaginas = !isNaN(numeroPaginas) ? numeroPaginas : 0;
  }
}

class AudioBook extends Livro {
  constructor(autor, ano, duracaoTotal) {
    super(autor, ano);
    this.duracaoTotal = !isNaN(duracaoTotal) ? duracaoTotal : 0;
  }
}

const pecados = new Livro("Jerry Bridges", 2000);

console.log(pecados);
