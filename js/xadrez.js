class Xadrez {

    iniciaJogo() {
        this._tabuleiro = Chessboard('board1', this.config);
        this._tabuleiro.start();
    }

    limpar() {
        this._tabuleiro.clear();
    }

    get config() {
        return {
            draggable: true,
            dropOffBoard: 'snapback',
            showNotation: false,
            position: 'start'
        };
    }

    get tabuleiro() {
        return this._tabuleiro
    }
}