# Desestruturação

## O que é?

É uma forma de pegarmos propriedades de objetos ou posições de arrays de uma forma mais simples

```js
const equipamentos = {
  nome: 'Oculos de protecao',
  fabricante: '3M',
  tipo: 'epi',
};

// Extrair informacao com desestruracao
const { fabricante, tipo } = equipamentos;

console.log(fabricante);
console.log(tipo);
```
