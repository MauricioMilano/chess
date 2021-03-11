var board = null
var game = new Chess()
var $status = $('#status')
var $fen = $('#fen')
var $pgn = $('#pgn')

function greySquare(square) {
    var $square = $('#board1 .square-' + square)

    var background = '#a9a9a9'
    if ($square.hasClass('black-3c85d')) {
        background = '#696969'
    }

    $square.css('background', background)
}

class Movimentacao {

    onDragStart(source, piece, position, orientation) {
        // do not pick up pieces if the game is over
        if (game.game_over()) return false

        // only pick up pieces for the side to move
        if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
            (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
            return false
        }
    }

    onDrop(source, target) {
        // see if the move is legal
        var move = game.move({
            from: source,
            to: target,
            promotion: 'q' // NOTE: always promote to a queen for example simplicity
        })

        // illegal move
        if (move === null) return 'snapback'

        updateStatus()
    }

    onMouseoverSquare(square, piece) {
        // get list of possible moves for this square
        var moves = game.moves({
            square: square,
            verbose: true
        })

        // exit if there are no moves available for this square
        if (moves.length === 0) return

        // highlight the square they moused over
        greySquare(square)

        // highlight the possible squares for this piece
        for (var i = 0; i < moves.length; i++) {
            greySquare(moves[i].to)
        }
    }

    onMouseoutSquare(square, piece) {
        $('#board1 .square-55d63').css('background', '')
    }

    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    onSnapEnd() {
        xadrez.tabuleiro.position(game.fen())
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

    $status.html(status)
    $fen.html(game.fen())
    $pgn.html(game.pgn())
}
