var menuAjuda = document.querySelector('#menu-ajuda');
var botaoAjuda = document.querySelector('#botao-ajuda');
var botaoFecharMenuAjuda = document.querySelector('#fechar-ajuda');

botaoAjuda.addEventListener('click', function (e) {
    let menu = new Menu();
    menu.remover();
    menuAjuda.style.display = "block";
})

botaoFecharmenuAjuda.addEventListener('click', function (e) {
    let menu = new Menu();
    menu.exibir();
    menuAjuda.style.display = "none";
});