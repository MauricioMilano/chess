var board = null
var $status = $('#status')
var $fen = $('#fen')
var $pgn = $('#pgn')

class ContraComputador extends Movimentacao {

    onDragStart(source, piece, position, orientation) {
        super.onDragStart()
        debugger
        if (game.turn() === 'w' && corDaPecaEscolhida == CorDaPeca.Preta) {
            if (piece.search(/^b/) !== -1) return false
        }
    }

    onDrop(source, target) {
        let snapback = super.onDrop(source, target);
        snapback == null && movimentoAleatorio();
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
        status = 'Jogo acabou, você venceu!'
        fimDeJogo(status);
    }
    else if (game.in_checkmate()) {
        status = 'Jogo acabou, você perdeu!'
        fimDeJogo(status);
    }

    else if (game.in_draw()) {
        status = 'Jogo acabou, empatamos.'
        fimDeJogo(status);
    }

    else {
        if (game.in_check() && vezDoJogador) {
            status += 'Você está em xeque. '
        } else {
            if (game.in_check()) {
                status += 'A máquina está em xeque. '
            }
            else {
                status += "\n" + fraseAleatoria
            }

        }
    }

    $status.html(status.replace(/\r?\n/g, '<br/>'))
    $fen.html(game.fen())
    $pgn.html(game.pgn())
}
