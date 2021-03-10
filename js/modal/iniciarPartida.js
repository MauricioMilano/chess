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
    document.querySelector('.partida').style.display = "block";
    document.querySelector('#cabecalho').style.display = "none";
    document.querySelector('#inicio').style.display = "none";
    modalIniciarPartida.style.display = "none";
    xadrez.iniciaJogo();
});