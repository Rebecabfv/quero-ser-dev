const alunos = [
  {
    nome: 'Zé',
    idade: 20,
    cpf: '123.456.789-01',
    email: 're',
  },
  {
    nome: 'Maria',
    idade: 27,
    cpf: '123.456.789-02',
    email: 'la',
  },
];

function menuCadastros() {
  const opcoesMenu = parseInt(
    prompt(
      'Digite qual opção você deseja:\n1 - Realizar o cadastro\n2 - Consultar alunos\n3 - Excluir aluno\n4 - Sair do menu'
    )
  );
  //   if (opcoesMenu === 1) {
  //     cadastro(alunos);
  //   }
  if (opcoesMenu === 2) {
    buscarEmail(alunos);
  }
  if (opcoesMenu === 3) {
    remocaoAluno(alunos);
  }
  if (opcoesMenu === 4) {
    return 'Obrigada!';
  }
  if (opcoesMenu > 4) {
    return 'Escolha um valor válido';
  }
}

function cadastro(alunos) {
  let desejaContinuar = 'S';

  while (desejaContinuar === 'S') {
    const nome = prompt('Nome:');
    const email = prompt('E-mail:');
    const age = parseInt(prompt('Idade:'));
    const activities = prompt(
      'Atividades: \n- Musculação 🏋️‍♀️ R$120,00 \n- Esteira🏃 R$40,00 \n - Natação 🏊‍♀️ R$50,00\n - Judô 🥋 R$90,00'
    );

    alunos.push({ nome, email, age, activities });

    desejaContinuar = prompt(
      'Deseja realizar outro cadastro? S/N'
    ).toLocaleUpperCase();

    if (desejaContinuar !== 'S') {
      menuCadastros();
      return alunos;
    }
  }
}

function buscarEmail(alunos) {
  const emailDesejado = prompt('Digite o email de busca:');
  const procuraEmail = alunos.filter(
    (alunos) => alunos.email === emailDesejado
  );
  procuraEmail == ''
    ? console.log('Email nao encontrado')
    : console.log(procuraEmail);

  menuCadastros();

  return procuraEmail;
}

function remocaoAluno(alunos) {
  const buscaEmail = prompt('Digite o email que deseja excluir:');
  alunos = alunos.forEach((aluno, indice) => {
    if (aluno.email === buscaEmail) {
      alunos.splice(indice, 1);
    }
  });
  menuCadastros();
  return alunos;
}

console.log(menuCadastros());
