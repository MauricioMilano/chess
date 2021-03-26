var $status = $('#status')
var $fen = $('#fen')
var $pgn = $('#pgn')


class OutroJogador extends Movimentacao {

    onDragStart(source, piece, position, orientation) {
       super.onDragStart(source, piece, position, orientation)
        if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
            (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
            return false
        }
    }

    onDrop(source, target) {
       super.onDrop(source, target);
        updateStatus()
    }

}

updateStatus = () => {
    var status = 'O jogo iniciou'
    new Cronometro().setCountDownDate(3)
    var moveColor = 'Branca'
    if (game.turn() === 'b') {
        moveColor = 'Preta'

    }

    // checkmate?
    if (game.in_checkmate()) {
        status = 'Jogo acabou, ' + moveColor + ' está em cheque mate'
    }

    // draw?
    else if (game.in_draw()) {
        status = 'Jogo acabou, empate'
    }

    // game still on
    else {
        status = "Vez da peça " + moveColor

        // check?
        if (game.in_check()) {
            status += ', ' + moveColor + ' está em cheque'
        }
    }
    console.log(game.position())
    $status.html(status)
    $fen.html(game.fen())
    $pgn.html(game.pgn())
}
