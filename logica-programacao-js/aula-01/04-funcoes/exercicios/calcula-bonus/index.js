//10. Faça uma função calculaBonus que receba como parâmetro o salário de uma pessoa e seu tempo de trabalho e devolva o valor de seu bônus anual de acordo com as seguintes regras:
// - menos de 1 ano: 0% do salário
// - entre 1 e 4 anos: 5% do salário
// - entre 4 e 7 anos: 10% do salário
// - mais de 7 anos: 15% do salário

const calculaBonus = (salario, tempoTrabalho) => {
  if (isNaN(tempoTrabalho) || isNaN(salario)) {
    return 'Digite um valor válido';
  }

  if (tempoTrabalho < 1) {
    return 0;
  }

  if (tempoTrabalho >= 1 && tempoTrabalho < 4) {
    return salario * 0.05;
  }

  if (tempoTrabalho >= 4 && tempoTrabalho < 7) {
    return salario * 0.1;
  }

  if (tempoTrabalho >= 7) {
    return salario * 0.15;
  }
};

console.log(
  'O valor do seu bônus anual é de R$: ' +
    calculaBonus(
      Number(prompt('Digite o seu salário:')),
      Number(prompt('Digite o tempo de trabalho:'))
    )
);
