var menuFimDeJogo = new Menu('#menu-fim-de-jogo');

function fimDeJogo(mensagem) {
    document.querySelector('.partida').style.display = "none";
    document.querySelector('#inicio').style.display = "block";
    menuFimDeJogo.exibir();
    $('#msg-fim-de-jogo').html(mensagem);
    if (mensagem == "Jogo acabou, você perdeu!") {
        $('#img-fim-de-jogo').attr('src', 'https://media.tenor.com/images/45f50da9cbb8f211afc1454773a52b82/tenor.gif');
    }
    else if(mensagem == "Jogo acabou, você venceu!") {
        $('#img-fim-de-jogo').attr('src', 'https://media3.giphy.com/media/2wTaRF4xUIOWl68RzI/giphy.gif');
    }
    confetti.start();
}

