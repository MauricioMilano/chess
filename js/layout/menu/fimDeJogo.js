var menuFimDeJogo = new Menu('#menu-fim-de-jogo');

function fimDeJogo(mensagem) {
    document.querySelector('.partida').style.display = "none";
    document.querySelector('#inicio').style.display = "block";
    menuFimDeJogo.exibir();
    $('#msg-fim-de-jogo').html(mensagem);
    confetti.start();
}

