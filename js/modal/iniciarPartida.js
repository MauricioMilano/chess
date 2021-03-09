var modalIniciarPartida = document.querySelector('#modal-iniciar-partida');
var botaoIniciarPartida = document.querySelector('#botao-iniciar-partida');
var botaoFecharModalIniciarPartida = document.querySelector('#fechar-iniciar-partida');
var botaoOutroJogador = document.querySelector('#outro-jogador');

botaoIniciarPartida.addEventListener('click', function (e) {
    let menu = new Menu();
    menu.remover();
    modalIniciarPartida.style.display = "block";
});

botaoFecharModalIniciarPartida.addEventListener('click', function (e) {
    let menu = new Menu();
    menu.exibir();
    modalIniciarPartida.style.display = "none";
});

botaoOutroJogador.addEventListener('click', function (e) {
    let partida = document.querySelector('.partida');
    modalIniciarPartida.style.display = "none";
    partida.style.display = "block";
    let xadrez = new Xadrez();
    xadrez.iniciaJogo();
});