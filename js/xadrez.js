class Xadrez {

    iniciaJogo() {
        this._tabuleiro = Chessboard('board1', this.config);
        this._tabuleiro.start();
    }

    limpar() {
        this._tabuleiro.clear();
    }

    get config() {
        this.movimentacao = new Movimentacao();
        return {
            draggable: true,
            dropOffBoard: 'snapback',
            showNotation: false,
            position: 'start',
            onDragStart: this.movimentacao.onDragStart,
            onDrop: this.movimentacao.onDrop,
            onMouseoutSquare: this.movimentacao.onMouseoutSquare,
            onMouseoverSquare: this.movimentacao.onMouseoverSquare,
            onSnapEnd: this.movimentacao.onSnapEnd
        };
    }

    get tabuleiro() {
        return this._tabuleiro
    }
}