var game = new Chess()
var $fen = $('#fen');

function quadradoCinza(quadrado) {
    var $quadrado = $('#board1 .square-' + quadrado)
    
    var background = '#a9a9a9'
    if ($quadrado.hasClass('black-3c85d')) {
        background = '#696969'
    }

    $quadrado.css('background', background);
}

class Movimentacao {

    constructor() {
        if(this.constructor == Movimentacao){
            throw new Error("Você não deveria instanciar um objeto do tipo Movimentcao diretamente, pois essa é uma classe abstata");
        }
    }


    onDragStart(source, piece, position, orientation) {
        if (game.game_over()) {
            return false
        }
    }

    onDrop(source, target) {

        let movimentacao = game.move({
            from: source,
            to: target,
            promotion: 'q' 
          })
        
          if (movimentacao === null) return 'snapback'
    }
    
    quadradoCinza = (quadrado) => {
        var $quadrado = $('#board1 .square-' + quadrado)
        
        var background = '#a9a9a9'
        if ($quadrado.hasClass('black-3c85d')) {
            background = '#696969'
        }
    
        $quadrado.css('background', background);
    }

    onMouseoverSquare(square, piece) {
        var movimentos = game.moves({
            square: square,
            verbose: true
        })

        if (movimentos.length === 0) {
            return
        }

        quadradoCinza(square)

        for (var i = 0; i < movimentos.length; i++) {
            quadradoCinza(movimentos[i].to)
        }
    }


    onMouseoutSquare(square, piece) {
        $('#board1 .square-55d63').css('background', '')
    }

    onSnapEnd() {
        xadrez.tabuleiro.position(game.fen())
    }
}