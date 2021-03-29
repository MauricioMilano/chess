var menuInicial = new Menu('.botoesMenu');
var menuFimDeJogo = new Menu('#menu-fim-de-jogo');
var menuAcabouTempo = new Menu('#menu-acabou-tempo-partida');

function voltarAoMenu() {
    xadrez.zerarJogo();
    menuAcabouTempo.remover();
    menuFimDeJogo.remover();
    menuInicial.exibir();
    document.querySelector('#cabecalho').style.display = "block";
    new Cronometro().setCountDownDate(100);
    confetti.stop();
}