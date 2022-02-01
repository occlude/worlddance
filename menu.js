let hamburguerEl = document.querySelector('#hamburguer');
let menuMobileEl = document.querySelector('#mobile-header');
let backdropEl = document.querySelector('#header-bg');
let botaoFechaMenuEL = document.querySelector('.fechar-menu');
let menuMobileListEl = document.querySelector('.menu-mobile');


hamburguerEl.addEventListener('click', function(){
  
  menuMobileEl.classList.toggle('hidden');
  
  window.setTimeout(function(){
      menuMobileListEl.classList.remove('left-fade');
      backdropEl.classList.remove('left-fade');
      botaoFechaMenuEL.classList.remove('left-fade');
  }, 10);
})

backdropEl.addEventListener('click', fechaMenu);
botaoFechaMenuEL.addEventListener('click', fechaMenu);


function fechaMenu(){
  menuMobileListEl.classList.add('left-fade');
  backdropEl.classList.add('left-fade');
  botaoFechaMenuEL.classList.add('left-fade');
  window.setTimeout(function(){
      menuMobileEl.classList.toggle('hidden');
  }, 900);
  
}