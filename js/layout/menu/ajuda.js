var botaoAjuda = document.querySelector('#botao-ajuda');
var botaoFecharMenuAjuda = document.querySelector('#fechar-ajuda');

var menuInicial = new Menu('.botoesMenu');
var menuAjuda = new Menu('#menu-ajuda');

botaoAjuda.addEventListener('click', function (e) {
    menuInicial.remover();
    menuAjuda.exibir();
})

botaoFecharMenuAjuda.addEventListener('click', function (e) {
    menuInicial.exibir();
    menuAjuda.remover();
});