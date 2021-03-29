var botaoIniciarPartida = document.querySelector('#botao-iniciar-partida');
var botaoComputador = document.querySelector('#computador');
var botaoOutroJogador = document.querySelector('#outro-jogador');
var botaoPecaBranca = document.querySelector('#peca-branca');
var botaoPecaPreta = document.querySelector('#peca-preta');

var corDaPecaEscolhida = null;

var menuInicial = new Menu('.botoesMenu');
var menuIniciarPartida = new Menu('#menu-iniciar-partida');
var menuEscolherPeca = new Menu('#menu-escolher-peca');

botaoIniciarPartida.addEventListener('click', function (e) {
    menuInicial.remover();
    menuIniciarPartida.exibir();
});

botaoOutroJogador.addEventListener('click', function (e) {
    iniciarPartida(TipoDoJogo.OutroJogador);
});

botaoComputador.addEventListener('click', function (e) {
    menuIniciarPartida.remover();
    menuEscolherPeca.exibir();
});

botaoPecaBranca.addEventListener('click', function (e) {
    corDaPecaEscolhida = CorDaPeca.Branca;
    iniciarPartida(TipoDoJogo.Computador);
});

botaoPecaPreta.addEventListener('click', function (e) {
    corDaPecaEscolhida = CorDaPeca.Preta;
    iniciarPartida(TipoDoJogo.Computador);
});

function iniciarPartida(tipoDoJogo) {
    document.querySelector('.partida').style.display = "block";
    document.querySelector('#cabecalho').style.display = "none";
    document.querySelector('#inicio').style.display = "none";
    menuIniciarPartida.remover();
    menuEscolherPeca.remover();
    xadrez.iniciaJogo(tipoDoJogo);
}