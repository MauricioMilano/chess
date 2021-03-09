var board = null
var game = new Chess()
var $status = $('#status')
var $fen = $('#fen')
var $pgn = $('#pgn')
class Movimentacao {

    onDragStart (source, piece, position, orientation) {
        // do not pick up pieces if the game is over
        if (game.game_over()) return false
        
        // only pick up pieces for the side to move
        if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
            return false
        }
    }
    
    onDrop (source, target) {
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
    
    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    onSnapEnd ()  {
        xadrez.tabuleiro.position(game.fen())
    }
    
    
    

}
updateStatus =  () => {
    var status = 'O jogo iniciou'
    new Cronometro().setCountDownDate(5)
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
        status = "Vez da peça "+ moveColor
        
        // check?
        if (game.in_check()) {
            status += ', ' + moveColor + ' está em cheque'
        }
    }
    
    $status.html(status)
    $fen.html(game.fen())
    $pgn.html(game.pgn())
}
