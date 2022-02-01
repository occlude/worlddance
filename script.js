let devoMostrarModal = localStorage.getItem('cadastrado-ou-nao');
let bodyEl = document.querySelector('body');
let modalCadastroDivEl = document.querySelector('#myModal');


// janela modal cadrastro loja 


if (devoMostrarModal === 'false'){
  modalCadastroDivEl.classList.remove('show');
  modalCadastroDivEl.style.display = 'none';
  bodyEl.classList.remove('modal-open');
}
else {
  $(document).ready(function() {
    $("#myModal").modal('show');
  });
}


let botaoCadastrarEl = document.querySelector('#salvarDados');
let botaoCarregarDadosEl = document.querySelector('#carregarDados');
let inputNome = document.querySelector('#nomeUser');
let inputEmail = document.querySelector('#emailUser');
let inputSenha = document.querySelector('#senhaUser');
botaoCadastrarEl.addEventListener('click', salvarDados);
botaoCarregarDadosEl.addEventListener('click', carregarDados);

  
function salvarDados(){
    let nomeUsuario = inputNome.value;
    let emailUsuario = inputEmail.value;
    let senhaUsuario = inputSenha.value;
    localStorage.setItem('nome', nomeUsuario);
    localStorage.setItem('email', emailUsuario);
    localStorage.setItem('senha', senhaUsuario);
    let modalCadastradoOuNao = modalCadastroDivEl.classList.toggle('show');
    localStorage.setItem('cadastrado-ou-nao', modalCadastradoOuNao);
    fecharModalCadastro;
    
}

function carregarDados(){
    let paragrafoCarregar = document.querySelector('#pCarregar');
    paragrafoCarregar.classList.remove('hidden');
}

function fecharModalCadastro(){
modalCadastroDivEl.classList.remove('show');
modalCadastroDivEl.style.display = 'none;';
}

//carrinho inferior
let botaoComprarEl = document.querySelectorAll('.comprar');
let carrinhoDivEl = document.querySelector('#carrinho');
let iconCarrinhoEl = document.querySelector('#icon-carrinho');
let i = 0;
let modalCarrinhoEl = document.querySelector('#modal-carrinho');
let somaProdutos = 0;
let totalEl = document.querySelectorAll('.total');
let produtosCarrinhoEl = document.querySelector('#produtos-carrinho');


botaoComprarEl.forEach(botaoClicado => {
    botaoClicado.addEventListener('click', function(e) {
        carrinhoDivEl.classList.remove('hidden');
        i = i + 100;
        iconCarrinhoEl.style.filter =  'invert(97%) sepia(25%) saturate(6262%) brightness(98%) contrast(105%)' + 'hue-rotate' + '('+i+'deg) ';
        iconCarrinhoEl.classList.remove('pulando');
        iconCarrinhoEl.offsetWidth;
        iconCarrinhoEl.classList.add('pulando');
        

        let botao = e.currentTarget;
        let produtoNome = botao.dataset.nome;
        let produtoValor = botao.dataset.valor;

        let novaDiv = document.createElement('div');
        produtosCarrinhoEl.appendChild(novaDiv);
        novaDiv.innerHTML =
            '<h4 class="nome-produto">' + produtoNome + '</h4><p class="valor">R$' + produtoValor + '</p>';
        novaDiv.classList.add('produtosModalCompra');
        somaProdutos += parseInt(produtoValor);
        totalEl.forEach(totais => {
          totais.innerHTML = 'Total: R$' + somaProdutos;
        });
    })
});

carrinhoDivEl.addEventListener('click', abreModalCompras);

function abreModalCompras(){

  if(modalCarrinhoEl.classList.contains('hidden') == true){
    modalCarrinhoEl.classList.toggle('hidden');
    iconCarrinhoEl.style.transform = 'rotate(90deg)';
    window.setTimeout(function(){
        modalCarrinhoEl.classList.toggle('modal-visivel');
        iconCarrinhoEl.src = "../gifs_imgs/icons/2561505_x_icon.png";
    }, 100);
    iconCarrinhoEl.style.transform = 'rotate(-90deg)';
    
  }
  else {
    modalCarrinhoEl.classList.toggle('modal-visivel');
    iconCarrinhoEl.style.transform = 'rotate(0deg)';
    window.setTimeout(function(){
       modalCarrinhoEl.classList.toggle('hidden');
       iconCarrinhoEl.src = "../gifs_imgs/icons/8679142_shopping_bag_ecommerce_icon.png";
    }, 100);
    
  }
    
}

let produtoEl = document.querySelectorAll('.produto');

produtoEl.forEach(produto => {
  produto.addEventListener('mouseover', function(e){
    let divImagemEl = produto.firstChild;
    let imagemProduto = divImagemEl.nextElementSibling;
    imagemProduto.style.filter = 'drop-shadow(0 0px 30px rgba(212, 219, 255, 0.7))';
  });
  produto.addEventListener('mouseout', function(e){
    let divImagemEl = produto.firstChild;
    let imagemProduto = divImagemEl.nextElementSibling;
    imagemProduto.style.filter = 'drop-shadow(0 15px 15px rgba(0, 0, 0, .2))';
  })
});


let botaoFinalizarEl = document.querySelector('.finalizar');
let modalFinalizarDivEl = document.querySelector('#modalFinalizar');
let campoEmail = document.querySelector('#email');
let campoNome = document.querySelector('#nome');
botaoFinalizarEl.addEventListener('click', abreModalFinalizar);

function abreModalFinalizar(e) {
  modalFinalizarDivEl.classList.remove('hidden');
  let carregarNome = localStorage.getItem('nome');
    campoNome.value = carregarNome;
  let carregarEmail = localStorage.getItem('email');
    campoEmail.value = carregarEmail;

  let tituloFinalizarEl = document.querySelector('#tituloFinalizar');
  tituloFinalizarEl.innerHTML = 'Olá ' + campoNome.value + ', finalize sua compra';
  /*let botao = e.currentTarget;
  let produtoValor = botao.dataset.valor;*/
  somaProdutos += parseInt(produtoValor);
  totalEl.forEach(totais => {
    totais.innerHTML = 'Total: R$' + somaProdutos;
  });
}

let botaoCompraFinalizadaEl = document.querySelector('#compraFinalizada');


let camposInformacoesFinalizar = document.querySelectorAll('.inputFinalizar')

let paragrafo = document.querySelector('#pClick');
botaoCompraFinalizadaEl.addEventListener('click', mostraParagrafoFinal);
function mostraParagrafoFinal(){
    for(let campo of camposInformacoesFinalizar){
    if(campo.value === ''){
    paragrafo.classList.remove('hidden');
    paragrafo.innerHTML = 'Preencha todos os campos';
    break;
  }
  else{
    let carregarEmail = localStorage.getItem('email');
    campoEmail.value = carregarEmail;
    paragrafo.classList.remove('hidden');
    paragrafo.innerHTML = 'Acompanhe sua compra pelo email: ' + campoEmail.value;
  }
  }
}

let botaoCancelarCompraEl = document.querySelector('#cancelarCompra');
let produtosDivComprarEl = document.querySelectorAll('.produtosModalCompra');
botaoCancelarCompraEl.addEventListener('click', fecharModalFinalizar);
function fecharModalFinalizar(){
  modalFinalizarDivEl.classList.add('hidden');
  for(let campo of camposInformacoesFinalizar){
    campo.value = '';
    paragrafo.innerHTML = '';
    totalEl.forEach(totais => {
          totais.innerHTML = 'Total:';
        });
    produtosCarrinhoEl.innerHTML = '';
  }
}
