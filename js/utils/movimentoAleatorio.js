function movimentoAleatorio() {
    window.setTimeout(() => {
        var possibleMoves = game.moves()

        if (possibleMoves.length === 0) return

        var randomIdx = Math.floor(Math.random() * possibleMoves.length)
        game.move(possibleMoves[randomIdx])
        xadrez.tabuleiro.position(game.fen())
    }, 300)
}