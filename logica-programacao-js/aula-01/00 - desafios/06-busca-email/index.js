const usuarios = [
  {
    nome: 'Zé',
    idade: 20,
    cpf: '123.456.789-01',
    email: 'ze@uol.com.br',
  },
  {
    nome: 'Maria',
    idade: 27,
    cpf: '123.456.789-02',
    email: 'maria_meg_costa@outlook.com',
  },
  {
    nome: 'Carla',
    idade: 37,
    cpf: '123.456.789-03',
    email: 'carla@bol.com.br',
  },
  {
    nome: 'Zeca',
    idade: 36,
    cpf: '123.456.789-03',
    email: 'zecal3@msn.com',
  },
  {
    nome: 'Mel',
    idade: 16,
    cpf: '123.456.789-03',
    email: 'melsaf@gmail.com',
  },
];

function encontreEmail(usuarios) {
  const emailDesejado = prompt('Digite o email que deseja buscar:');
  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.email === emailDesejado
  );
  if (!usuarioEncontrado) {
    return 'Email nao existe';
  }
  return usuarioEncontrado;
}
console.log(encontreEmail(usuarios));
