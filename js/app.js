// guarda os itens do carrinho { nome, preco, quantidade }
let subtotais = [0];
limpar();

function adicionar() {
  //quando cicar no botão, recupera osvalores do formulário (produto, quantidade, valor)
  let produtoCompleto = document.getElementById('produto');
  let quantidade = document.getElementById('quantidade').value;
  //quebra o produtoCompleto para pegar somente o nome
  let nomeProduto = produtoCompleto.value.split('-')[0];
  //quebra o produtoCompleto para pegar somente o valor
  let valor = produtoCompleto.value.split('R$')[1];

 // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }


    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

  //calcular o preço/subtotal, porém se o consumidor não especificar a quantidade, a própria será 1
  if (!quantidade) {
    quantidade = 1;
  }
    let subtotal = parseInt(valor) * parseInt(quantidade);
    subtotais.push(subtotal);

  //adicionar o item ao carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span>
        </section>`;

  //atualizar o valor total
  let valorTotal = subtotais.reduce((soma, valor) => soma + valor, 0);
  let totalGeral = document.getElementById('valor-total');
  totalGeral.textContent = 'R$' + valorTotal;
  document.getElementById('quantidade').value = 1;
}

function limpar() {
  subtotais = [];
  const lista = document.getElementById('lista-produtos');
  const totalGeral = document.getElementById('valor-total');

  lista.innerHTML = '';
  totalGeral.textContent = 'R$0';
}
