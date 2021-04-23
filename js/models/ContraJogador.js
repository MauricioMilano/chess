var $status = $('#status')
var $fen = $('#fen')
var $pgn = $('#pgn')

class ContraJogador extends Movimentacao {

    onDragStart(source, piece, position, orientation) {
       super.onDragStart(source, piece, position, orientation)
        if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
            (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
            return false
        }
    }

    onDrop(source, target) {
       super.onDrop(source, target);
       atualizarStatusJogador()
    }

}

atualizarStatusJogador = () => {
    new Cronometro().setCountDownDate(3)
    var moveColor = 'Branca'
    if (game.turn() === 'b') {
        moveColor = 'Preta'
    }

    if (game.in_checkmate()) {
        status = 'Jogo acabou, jogador daa peçaa ' + moveColor + ' está em cheque mate'
        fimDeJogo(status);
    }

    else if (game.in_draw()) {
        status = 'Jogo acabou, empate'
        fimDeJogo(status);
    }

    else {
        status = "Vez do jogador das peças " + moveColor

        if (game.in_check()) {
            status += ', ' + moveColor + ' está em cheque'
        }
    }
    $status.html(status)
    $fen.html(game.fen())
    $pgn.html(game.pgn())
}
