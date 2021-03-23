var modalIniciarPartida = document.querySelector('#modal-iniciar-partida');
var botaoIniciarPartida = document.querySelector('#botao-iniciar-partida');
var botaoOutroJogador = document.querySelector('#outro-jogador');
var botaoComputador = document.querySelector('#computador');

botaoIniciarPartida.addEventListener('click', function (e) {
    let menu = new Menu();
    menu.remover();
    modalIniciarPartida.style.display = "block";
});

botaoOutroJogador.addEventListener('click', function (e) {
    iniciarPartida();
    xadrez.iniciaJogo(TipoDoJogo.OutroJogador);
});

botaoComputador.addEventListener('click', function (e) {
    iniciarPartida();
    xadrez.iniciaJogo(TipoDoJogo.Computador);
});

function iniciarPartida() {
    document.querySelector('.partida').style.display = "block";
    document.querySelector('#cabecalho').style.display = "none";
    document.querySelector('#inicio').style.display = "none";
    modalIniciarPartida.style.display = "none";
}