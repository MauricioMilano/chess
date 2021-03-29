var mouse_x = null;
var mouse_y = null;
var mouse_tabuleiro_scanner = document.querySelector('#board1');    
mouse_tabuleiro_scanner.addEventListener('mousemove', onMouseUpdate, false);
mouse_tabuleiro_scanner.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  mouse_x = e.pageX;
  mouse_y = e.pageY;
}

function getMouseX() {
  return mouse_x;
}

function getMouseY() {
  return mouse_y;
}