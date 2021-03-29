var promocaoDisplay = document.querySelector('#promocao-preta');
var game = new Chess()
var $fen = $('#fen');
var hold = {
    from:"",
    to: "" 
}
var inPromotion = false; 
function quadradoCinza(quadrado) {
    var $quadrado = $('#board1 .square-' + quadrado)
    
    var background = '#a9a9a9'
    if ($quadrado.hasClass('black-3c85d')) {
        background = '#696969'
    }

    $quadrado.css('background', background);
}
function promoverPeca(p){
    // coloco a promoção no objeto a ser movido 
    hold.promotion = p
    // tiro a tela de promoção
    promocaoDisplay.style.display = "none";
    // pego a posicão que estava o xadrez 
    let position = xadrez.tabuleiro.position()
    // movo a peça visualmente e promovo. 
    xadrez.tabuleiro.move(`${hold.from}-${hold.to}`,`w${p.toUpperCase()}`)
    if (game.turn() === 'b'){
        position[hold.to] = `b${p.toUpperCase()}`;
    }else{
        position[hold.to] = `w${p.toUpperCase()}`;

    }
    // apago a peça antiga viualmente
    delete position[hold.from]
    xadrez.tabuleiro.position(position)
    // faço o movimento real dentro das regras 
    game.move(hold)
    // desbloqueio o tabuleiro
    inPromotion = false

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
        if (inPromotion){
            return "snapback"
        }
        const movimentacao = {
            from: source,
            to: target,
        }
        var movimento = null;
        let validation = game.validateMovementAndPromotion(movimentacao)
        if(validation.movement){
            hold = movimentacao
            if (validation.promotion){
                promocaoDisplay.style.display = "block";
                promocaoDisplay.style.left = `${(mouse_x - 80)}px`
                promocaoDisplay.style.top = `${(mouse_y - 80)}px`
                inPromotion = true;
            }else{
                movimento = game.move(movimentacao)
            }
        }

        if (movimento!=null){
            return 'snapback'
        }

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