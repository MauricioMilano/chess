var board = null
var $status = $('#status')
var $fen = $('#fen')
var $pgn = $('#pgn')

class Computador extends Movimentacao {

    onDragStart(source, piece, position, orientation) {
        super.onDragStart(source, piece, position, orientation);
        
        if (corDaPecaEscolhida == CorDaPeca.Preta) {
            if (piece.search(/^w/) !== -1) return false
        } else {
            if (piece.search(/^b/) !== -1) return false
        }
    }

    onDrop(source, target) {
        super.onDrop(source, target);
        movimentoAleatorio();
        atualizarStatusPC();
    }

}

atualizarStatusPC = () => {
    new Cronometro().setCountDownDate(3)
    
    var vezDoJogador = (game.turn() === 'b') && (corDaPecaEscolhida == CorDaPeca.Branca)
    
    var frasesAleatorias = [
        "Mas você tem certeza que fez essa jogada?",
        "Se eu tivesse uma avó, ela jogaria mais rápido que você...",
        "Ótima jogada, não estava preparado!",
        "Aulas, padrin!",
        "Brabo.",
        "Aulas e palestras!",
        "Bem pensado...",
        "É só isso que você consegue fazer?"
    ]
    
    var fraseAleatoria = frasesAleatorias[Math.floor(Math.random() * frasesAleatorias.length)];
    
    var status = 'Sua vez! '
    
    if (game.in_checkmate() && vezDoJogador) {
        status = 'Jogo acabou, você está em cheque mate.'
    }
    else if (game.in_checkmate()) {
        status = 'Jogo acabou, estou em cheque mate.'
        fimDeJogo(status);
    }
    
    else if (game.in_draw()) {
        status = 'Jogo acabou, empate.'
        fimDeJogo(status);
    }
    
    else {
        if (game.in_check() && vezDoJogador) {
            status += 'Você está em cheque. '
        } else {
            status += fraseAleatoria
        }
    }

    $status.html(status)
    $fen.html(game.fen())
    $pgn.html(game.pgn())
}
