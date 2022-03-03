// Faça uma função para calcular o fatorial de um número passado por parâmetro, onde este é calculado ao multiplicarmos o número em questão por todos os números inteiros que o antecedem.

// Exemplo: fatorial de 5 é igual a 1 * 2 * 3 * 4 * 5 = 120.

function calculaFatorial(num) {
  let fatorial = num;
  while (num > 1) {
    num = num - 1;
    fatorial = fatorial * num;
  }
  return fatorial;
}

console.log(calculaFatorial(5));
