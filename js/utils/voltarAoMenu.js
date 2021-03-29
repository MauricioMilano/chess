function voltarAoMenu() {
    xadrez.zerarJogo();
    document.querySelector('#menu-acabou-tempo-partida').style.display = "none"
    document.querySelector('#menu-fim-de-jogo').style.display = "none";
    document.querySelector('#cabecalho').style.display = "block";
    let menu = new Menu();
    menu.exibir();
    new Cronometro().setCountDownDate(100);
    confetti.stop();
}