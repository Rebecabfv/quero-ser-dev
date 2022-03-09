// Enunciado
// Uma doceria pode armazenar em estoque no máximo as seguintes quantidades de doces:

// 🍰 64 pedaços

// 🎂 8 bolos

// 🍪 100 cookies

// 🍩 20 donuts

// 🍫 50 barras de chocolate

// a) No sistema deve ser possível reestocar os doces, escolhendo um dos doces vendidos e informando qual a quantidade
//que chegou no estoque (seu valor somado ao estoque atual não pode ultrapassar o máximo determinado acima), assim como deve
//ser possível decrementar seus valores ao realizar uma venda.

// b) Faça um painel para refletir o estoque atual e informar os doces disponíveis, como no exemplo, que tenha as cores correspondentes
// para representar o estoque atual dos produtos para os clientes, de forma a exibir um emoji seguido de um símbolo (🟢, 🔴 ou ❌️).
// 🟢 + de 20% do estoque total

// 🔴 - de 20% do estoque total

// ❌️ estoque zerado para o doce

const docesPadrao = [
  { tipo: 'pedacos', quantidade: 64, emoji: '🍰' },
  { tipo: 'bolos', quantidade: 8, emoji: '🎂' },
  { tipo: 'cookies', quantidade: 100, emoji: '🍪' },
  { tipo: 'donuts', quantidade: 20, emoji: '🍩' },
  { tipo: 'barrasChocolate', quantidade: 50, emoji: '🍫' },
];

let docesEstoque = [
  { tipo: 'pedacos', quantidade: 64, emoji: '🍰' },
  { tipo: 'bolos', quantidade: 8, emoji: '🎂' },
  { tipo: 'cookies', quantidade: 100, emoji: '🍪' },
  { tipo: 'donuts', quantidade: 2, emoji: '🍩' },
  { tipo: 'barrasChocolate', quantidade: 0, emoji: '🍫' },
];

const retiraEstoque = (docesEstoque) => {
  let doceDesejado = prompt(
    'Digite o que deseja vender: pedacos / bolos / cookies / donuts / barrasChocolate'
  ).toLowerCase();
  let quantidadeDesejada = parseInt(prompt('Digite a quantidade que deseja: '));

  const vendeDoce = docesEstoque.map((doce, indice) => {
    if (doce.tipo === doceDesejado) {
      let quantidade = doce.quantidade - quantidadeDesejada;
      if (quantidade >= 0) {
        return { tipo: doce.tipo, quantidade: quantidade, emoji: doce.emoji };
      }
      return doce;
    } else {
      return {
        tipo: doce.tipo,
        quantidade: doce.quantidade,
        emoji: doce.emoji,
      };
    }
  });
  return vendeDoce;
};

const adicionaEstoque = (docesEstoque, docesPadrao) => {
  let doceDesejado = prompt(
    'Digite o que deseja vender: pedacos / bolos / cookies / donuts / barrasChocolate'
  ).toLowerCase();
  let quantidadeDesejada = parseInt(prompt('Digite a quantidade que deseja: '));

  const adicionaDoce = docesEstoque.map((doce, indice) => {
    if (doce.tipo === doceDesejado) {
      let quantidade = doce.quantidade + quantidadeDesejada;
      if (quantidade <= docesPadrao[indice].quantidade) {
        return { tipo: doce.tipo, quantidade: quantidade };
      }
      return doce;
    } else {
      return { tipo: doce.tipo, quantidade: doce.quantidade };
    }
  });
  return adicionaDoce;
};

function painelEstoque(docesEstoque, docesPadrao) {
  const painelAtual = docesEstoque.map((doce, indice) => {
    const porcentagemEstoque = doce.quantidade * (20 / 100);
    const porcentagemPadrao = docesPadrao[indice]['quantidade'] * (20 / 100);
    if (porcentagemEstoque >= porcentagemPadrao) {
      return doce.emoji + ' 🟢';
    }
    if (doce.quantidade === 0) {
      return doce.emoji + ' ❌️';
    }
    if (porcentagemEstoque <= porcentagemPadrao) {
      return doce.emoji + ' 🔴';
    }
  });
  return painelAtual;
}

let desejaRealizarOutraOperacao = 'S';
while (desejaRealizarOutraOperacao === 'S') {
  const venderOuEstocar = parseInt(
    prompt(
      'Opções 1 - Vender produto 2 - Adicionar produto no estoque 3 - Mostrar painel de estoque : '
    )
  );

  if (venderOuEstocar === 1) {
    docesEstoque = retiraEstoque(docesEstoque);
    console.log(docesEstoque);
  }
  if (venderOuEstocar === 2) {
    docesEstoque = adicionaEstoque(docesEstoque, docesPadrao);
    console.log(docesEstoque);
  }
  if (venderOuEstocar === 3) {
    const painel = painelEstoque(docesEstoque, docesPadrao);
    console.log(painel);
  }

  desejaRealizarOutraOperacao = prompt(
    'Deseja realizar outra operação? S/N'
  ).toUpperCase();
}
