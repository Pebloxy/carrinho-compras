// guarda os itens do carrinho { nome, preco, quantidade }
let carrinho = [];

// inicializa o carrinho já com o produto existente no HTML
function carregarCarrinhoInicial() {
  const lista = document.getElementById('lista-produtos');
  const totalEl = document.getElementById('valor-total');
  carrinho = [];

  const produtos = lista.querySelectorAll('.carrinho__produtos__produto');
  produtos.forEach(prod => {
    const text = prod.textContent.trim();
    // é para aparecer algo tipo "1x Celular R$1400"
    const match = text.match(/(\d+)x\s+(.+)\s+R\$(\d+(?:\.\d+)?)/);
    if (match) {
      const quantidade = parseInt(match[1], 10);
      const nome = match[2];
      const preco = parseFloat(match[3]);
      carrinho.push({ nome, preco, quantidade });
    }
  });

  // calcula o total inicial
  const total = carrinho.reduce((acc, cur) => acc + cur.preco * cur.quantidade, 0);
  totalEl.textContent = `R$${total}`;
}

function adicionar() {
  // pega elementos do DOM
  const select = document.getElementById('produto');
  const quantidadeInput = document.getElementById('quantidade');
  const lista = document.getElementById('lista-produtos');
  const totalEl = document.getElementById('valor-total');

  // extrai nome e preço do produto selecionado
  const selectedValue = select.value;
  const parts = selectedValue.split(' - R$');
  const nome = parts[0];
  const preco = parseFloat(parts[1]);

  const quantidade = parseInt(quantidadeInput.value, 10) || 1;

  const item = { nome, preco, quantidade };
  carrinho.push(item);

  // limpa o campo de quantidade para a próxima adição
  quantidadeInput.value = '';

  // atualiza o display do carrinho
  const produtoSection = document.createElement('section');
  produtoSection.className = 'carrinho__produtos__produto';
  produtoSection.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${preco}</span>`;
  lista.appendChild(produtoSection);

  // atualiza o total
  const total = carrinho.reduce((acc, cur) => acc + cur.preco * cur.quantidade, 0);
  totalEl.textContent = `R$${total}`;

  console.log(carrinho);
}

function limpar() {
  carrinho = [];
  const lista = document.getElementById('lista-produtos');
  const totalEl = document.getElementById('valor-total');

  lista.innerHTML = '';
  totalEl.textContent = 'R$0';
}

// roda a função para carregar o carrinho inicial com os itens já presentes no HTML
carregarCarrinhoInicial();