var modalAjuda = document.querySelector('#modal-ajuda');
var botaoAjuda = document.querySelector('#botao-ajuda');
var botaoFecharModalAjuda = document.querySelector('#fechar-ajuda');

botaoAjuda.addEventListener('click', function (e) {
    let menu = new Menu();
    menu.remover();
    modalAjuda.style.display = "block";
})

botaoFecharModalAjuda.addEventListener('click', function (e) {
    let menu = new Menu();
    menu.exibir();
    modalAjuda.style.display = "none";
});