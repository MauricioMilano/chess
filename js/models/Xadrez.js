class Xadrez {

    iniciaJogo(tipoDoJogo) {
        this.tipoDoJogo = tipoDoJogo;
        this._tabuleiro = Chessboard('board1', this.config);
        this._tabuleiro.clear();
        this._tabuleiro.start();
        corDaPecaEscolhida == CorDaPeca.Preta && this.virarTabuleiro();
    }

    limpar() {
        this._tabuleiro.clear(false);
    }

    iniciar() {
        this._tabuleiro.start(false);
    }

    zerarJogo() {
        this.limpar();
        this.iniciar();
        game.reset()
    }

    virarTabuleiro() {
        this._tabuleiro.flip();
    }


    get config() {
        this.movimentacao = null;
        new Cronometro().setCountDownDate(3);

        if (this.tipoDoJogo == TipoDoJogo.Computador) {
            $('#status').html("Sua vez!");
            corDaPecaEscolhida == CorDaPeca.Preta && movimentoAleatorio();
            this.movimentacao = new ContraComputador();
        } else {
            this.movimentacao = new ContraJogador();
        }

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