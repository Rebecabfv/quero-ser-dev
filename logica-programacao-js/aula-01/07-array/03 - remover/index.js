// pop, shift, slice, splice

const equipamentos = [
  'Capacete',
  'Mascara',
  'Oculos',
  'Colete',
  'Oculos',
  'Colete',
];

// Remover o ultimo elemento
equipamentos.pop();

// Remover o primeiro elemento
equipamentos.shift();

// Apaga uma parte do array
// primeiro parametro: indice
// segundo parametro: quantidade de elementos a remover
// terceiro parametro : quais elementos adicionar no local do elemento retirado
equipamentos.splice(0, 1, 'cinto', 'bota');
console.log(equipamentos);
