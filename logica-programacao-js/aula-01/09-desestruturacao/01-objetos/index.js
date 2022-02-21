const equipamentos = {
  nome: 'Oculos de protecao',
  fabricante: '3M',
  tipo: 'epi',
};

// Extrair informacao com desestruracao
const { fabricante, tipo } = equipamentos;

const equipamento1 = {
  nome: 'Oculos de protecao',
  fabricante,
  tipo,
};

console.log(fabricante);
console.log(tipo);
console.log(equipamento1);
