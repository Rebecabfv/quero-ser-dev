// Vamos fazer um programa para cadastro de alunos em uma academia, para isso iremos salvá-los em uma lista! Cada aluno possui os seguintes tipos de dados:

// name: string
// email: string
// age: number
// activities?: string[]
// Devemos ter as seguintes funcionalidades:

// Cadastro
// Busca por email (em caso positivo exibe os dados do aluno)
// Remoção de aluno (caso email exista email)
// Extras
//        Matrícula em atividade
//        Valor mensal das atividades:
//              Musculação 🏋️‍♀️ R$120,00
//              Esteira🏃 R$40,00
//              Natação 🏊‍♀️ R$50,00
//              Judô 🥋 R$90,00
// Regras de negócio:
//        Esteira não pode acontecer junto com musculação, pois já está inclusa nessa categoria
//        Menores de 14 anos não podem fazer musculação

const alunos = [];

function menuCadastros() {
  const opcoesMenu = parseInt(
    prompt(
      'Digite qual opção você deseja:\n1 - Realizar o cadastro\n2 - Consultar alunos\n3 - Excluir aluno\n4 - Sair do menu'
    )
  );
  if (opcoesMenu === 1) {
    cadastro(alunos);
  }
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

    let desejaCadastrarOutraAtividade = 'S';
    let activities = [];
    while (desejaCadastrarOutraAtividade === 'S') {
      let activitiesEscolhido = parseInt(
        prompt(
          'Atividades: (digite apenas uma por vez) \n 1 - Musculação 🏋️‍♀️ R$120,00 \n 2 - Esteira🏃 R$40,00 \n 3 - Natação 🏊‍♀️ R$50,00\n 4 - Judô 🥋 R$90,00'
        )
      );

      if (age < 14 && activitiesEscolhido === 1) {
        console.log('Menores de 14 anos não podem fazer musculação');
        cadastro(alunos);
        return;
      }

      if (activities.length === 0) {
        activities.push(activitiesEscolhido);
      } else {
        const verificaMuscularcaoEEsteira = activities.map((atividade) => {
          if (
            (atividade === 1 && activitiesEscolhido === 2) ||
            (atividade === 2 && activitiesEscolhido === 1)
          ) {
            console.log(
              'Esteira não pode acontecer junto com musculação, pois já está inclusa nessa categoria'
            );
            return;
          }
          return 1;
        });

        if (verificaMuscularcaoEEsteira[0] === 1) {
          activities.push(activitiesEscolhido);
        }
      }

      desejaCadastrarOutraAtividade = prompt(
        'Deseja cadastrar outra atividade? S/N'
      ).toUpperCase();
    }

    alunos.push({ nome, email, age, activities: activities });

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

menuCadastros();
console.log(alunos);
