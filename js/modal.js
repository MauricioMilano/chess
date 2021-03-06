var botaoIniciarPartida = document.querySelector('.iniciarPartida');
var botaoAjuda = document.querySelector('.ajuda');
var botaoFecharModalIniciarPartida = document.querySelector('.fechar-iniciarPartida');
var botaoFecharModalAjuda = document.querySelector('.fechar-ajuda');
var botoesDoMenu = document.querySelector('.botoesMenu');
var botaoOutroJogador = document.querySelector('.outroJogador');

var modalIniciarPartida = document.querySelector('.modal-iniciarPartida');
var modalAjuda = document.querySelector('.modal-ajuda');

// Funções em Comum
function exibirMenu() {
  botoesDoMenu.style.display = "block";
}
function removerMenu() {
  botoesDoMenu.style.display = "none";
}

// Modal de Iniciar Partida
botaoIniciarPartida.addEventListener('click', function(e) {
  exibirModalIniciarPartida();
});

function exibirModalIniciarPartida() {
  removerMenu();
  modalIniciarPartida.style.display = "block";
}

botaoFecharModalIniciarPartida.addEventListener('click', function(e) {
  exibirMenu();
  modalIniciarPartida.style.display = "none";
});

// Botão de Opção de Outro Jogador do Modal de Iniciar Partida
botaoOutroJogador.addEventListener('click', function(e) {
  exibirTabuleiro();
});

function exibirTabuleiro() {
  let partida = document.querySelector('.partida');
  modalIniciarPartida.style.display = "none";
  partida.style.display = "block";
  board1.start()
}

// Modal de Ajuda
botaoAjuda.addEventListener('click', function(e) {
  exibirModalAjuda();
})

function exibirModalAjuda() {
  removerMenu();
  modalAjuda.style.display = "block";
}

botaoFecharModalAjuda.addEventListener('click', function(e) {
  exibirMenu();
  modalAjuda.style.display = "none";
});
