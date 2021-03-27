function voltarAoMenu() {
    xadrez.zerarJogo();
    document.querySelector('#modal-acabou-tempo-partida').style.display = "none"
    document.querySelector('#modal-fim-de-jogo').style.display = "none";
    document.querySelector('#cabecalho').style.display = "block";
    let menu = new Menu();
    menu.exibir();
    new Cronometro().setCountDownDate(10);
    confetti.stop();
}