class Xadrez {
    
    constructor() {
        this._config = {};
    }

    iniciaJogo() {
        Chessboard('board1', this.config).start();
    }

    get config() {
        return {
            draggable: true,
            dropOffBoard: 'snapback',
            showNotation: false,
            position: 'start'
        };
    }
}

