//botao sobre os criadores
let botaoSobreEl = document.querySelector('#botaoSobre');
let modalCriadoresEl = document.querySelector('#modalCriadores');

botaoSobreEl.addEventListener('click', abrirModalCriadores);
function abrirModalCriadores(){
  modalCriadoresEl.classList.toggle('hidden');
}

let botaoFechar = document.querySelector('#fechar-modal-criadores');

botaoFechar.addEventListener('click', function(){
  modalCriadoresEl.classList.toggle('hidden');
})
