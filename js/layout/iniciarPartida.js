var menuIniciarPartida = document.querySelector('#menu-iniciar-partida');
var menuEscolherPeca = document.querySelector('#menu-escolher-peca');
var botaoIniciarPartida = document.querySelector('#botao-iniciar-partida');
var botaoComputador = document.querySelector('#computador');
var botaoOutroJogador = document.querySelector('#outro-jogador');
var botaoPecaBranca = document.querySelector('#peca-branca');
var botaoPecaPreta = document.querySelector('#peca-preta');

var corDaPecaEscolhida = null;

botaoIniciarPartida.addEventListener('click', function (e) {
    let menu = new Menu();
    menu.remover();
    menuIniciarPartida.style.display = "block";
});

botaoOutroJogador.addEventListener('click', function (e) {
    iniciarPartida();
    xadrez.iniciaJogo(TipoDoJogo.OutroJogador);
});

botaoComputador.addEventListener('click', function (e) {
    menuIniciarPartida.style.display = "none";
    menuEscolherPeca.style.display = "block";
});

botaoPecaBranca.addEventListener('click', function (e) {
    iniciarPartida();
    corDaPecaEscolhida = CorDaPeca.Branca;
    xadrez.iniciaJogo(TipoDoJogo.Computador);
});

botaoPecaPreta.addEventListener('click', function (e) {
    iniciarPartida();
    corDaPecaEscolhida = CorDaPeca.Preta;
    xadrez.iniciaJogo(TipoDoJogo.Computador);
});

function iniciarPartida() {
    document.querySelector('.partida').style.display = "block";
    document.querySelector('#cabecalho').style.display = "none";
    document.querySelector('#inicio').style.display = "none";
    menuEscolherPeca.style.display = "none";
    menuIniciarPartida.style.display = "none";
}