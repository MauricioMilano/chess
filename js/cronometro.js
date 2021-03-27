var modalTempoAcabou = document.querySelector('#modal-acabou-tempo-partida');
var botaoVoltarJogo = document.querySelector('#voltar-jogo');

var countDownDate = null;

class Cronometro {
    setCountDownDate (minutes){
        countDownDate = new Date(new Date().getTime() + minutes * 60000).getTime();
    }
}

var x = setInterval(function() {
  var now = new Date().getTime();
  
  countDownDate = countDownDate == null ? new Date(new Date().getTime() + 100 * 60000).getTime() : countDownDate;
  var distance = countDownDate - now;
    
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("clock").innerHTML = `Tempo restante: 0${minutes}:${`${seconds}`.padStart(2,"0")}`;
    
  if (distance < 0) {
    document.querySelector('.partida').style.display = "none";
    document.querySelector('#inicio').style.display = "block";
    modalTempoAcabou.style.display = "block";
    document.getElementById("clock").innerHTML = "Acabou o Tempo!";
  }
}, 1000);


botaoVoltarJogo.addEventListener('click', function (e) {
  modalTempoAcabou.style.display = "none";
  document.querySelector('#inicio').style.display = "none";
  document.querySelector('.partida').style.display = "block";
  new Cronometro().setCountDownDate(3);
});