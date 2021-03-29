var menuFimPartida = document.querySelector('#menu-fim-de-jogo');
var botaoComputador = document.querySelector('#msg-fim-de-jogo');

function fimDeJogo(mensagem) {
    document.querySelector('.partida').style.display = "none";
    document.querySelector('#inicio').style.display = "block";
    menuFimPartida.style.display = "block";
    $('#msg-fim-de-jogo').html(mensagem);
    confetti.start();
}