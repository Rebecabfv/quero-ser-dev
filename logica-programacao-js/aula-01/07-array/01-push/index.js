const alunas = ['Rebeca', 'Ceci', 'Carol', 'Lorraine'];

// Método push - incluir um valor no final da array
alunas.push('Naty');

// É bom atribuir o prompt a uma variavel para poder fazer a verificacao dele, como:
// ver se é uma string, a quantidade de caracter
const novaAluna = prompt('Entre com um nome:');
alunas.push(novaAluna);

for (i = 0; i < alunas.length; i++) {
  console.log(alunas[i]);
}
