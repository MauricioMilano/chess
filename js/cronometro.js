var countDownDate = new Date(new Date().getTime() + 5 *60000).getTime();

class Cronometro{
    constructor(){

    }
    setCountDownDate (minutes){
        countDownDate = new Date(new Date().getTime() + minutes *60000).getTime();
    }
}


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="clock"
  document.getElementById("clock").innerHTML = `0${minutes}:${`${seconds}`.padStart(2,"0")}`;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);

 