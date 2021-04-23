# Manual Xadrezinho


[[toc]]

## Composição do jogo
Cada jogador possui 16 peças: oito peões, dois cavalos, dois bispos, duas torres, um rei e uma rainha, sendo que cada tipo de peça possui um movimento característico. Cada jogador possui peças de uma cor específica, podendo ser da cor branca, ou preta. Na nossa plataforma, o jogador só pode escolher a sua peça caso ele opte por jogar contra o computador.

O jogo acontece em um tabuleiro, que possui oito fileiras e oito colunas, totalizando 64 casas, onde 32 são de uma tonalidade de marrom clara, e as outras 32 de um marrom mais escuro.

## Objetivo do jogo
### Xeque-mate
O objetivo do jogo é dar xeque-mate ao adversário, o que ocorre quando o rei do oponente se encontra em xeque e não existe nenhum lance de fuga, defesa ou ataque pode ser realizado para anular o xeque.

### Xeque
O xeque ocorre quando o jogador moveu sua peça de maneira que o próximo movimento dela pode ser de captura do rei. Se o adversário estiver em xeque, ele é obrigado a fazer o movimento necessário.

### Empate
Ocorre quando o rei do jogador que deve fazer o lance, não está em xeque e lhe é impossível fazer qualquer lance regulamentar. É considerado automaticamente empatado os finais de partida em que restam só o rei contra rei, rei e bispo contra rei e cavalo contra rei, porque não é possível dar xeque mate só com estas peças.

Outras circunstâncias que são raras acontecer e também se enquadram no empate:

* Foram efetuados mais de 50 lances sem que tenha sido capturada uma peça, ou se tenha movimentado um peão.
* Repetição da mesma posição por três vezes.

## Como jogar
Ao selecionar uma peça com o mouse, a interface exibe para o jogador quais são as casas válidas de movimentação para a peça selecionada. Caso o jogador opte pelo modo contra outro jogador, a interface irá retornar mensagens informando de qual. Caso o jogador opte pelo modo contra o computador, ele irá retornar algumas mensagens, simulando que uma máquina está dialogando com ele.

## Como capturar uma peça
Se uma peça puder ser movida para uma casa em que está localizada uma peça adversária, aquela peça adversária pode ser capturada. Assim, a peça a ser jogada move-se para a casa da peça oponente, que é então retirada do tabuleiro.

O rei é a única peça que nunca pode ser capturada, uma vez que a partida termina quando ocorre o xeque-mate, ou seja, o rei é capturado.


## Quem começa o jogo
O jogador que sempre inicia a partida é o portador das peças brancas.

## Movimento das peças
- **Rei**: move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/817842383751217172/834945247221252116/unknown.png">
</p>

- **Rainha**: é a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal. Em termos de valor, não é comparável a nenhuma outra peça, a não ser a rainha adversária.
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/817842383751217172/834945332550959105/unknown.png">
</p>

- **Bispo**: move-se pela diagonal, sendo que nunca poderá mudar a cor das casas em que se encontra, uma vez que movendo-se em diagonal, não lhe é permitido passar para uma diagonal de outra cor. O valor do bispo é considerado ligeiramente superior ao do cavalo, todavia, dependendo da posição no tabuleiro, nem sempre será vantajoso trocá-lo por um cavalo oponente.
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/817842383751217172/834945537283063818/unknown.png">
</p>

- **Cavalo**: movimenta-se sempre em "L", ou seja, duas casas para frente, para o lado ou para trás e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias, como indo, por exemplo, desde a casa g1 para a casa f3 nos primeiro lances. Comumente se diz que o cavalo move-se "uma casa como torre e uma casa como bispo".
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/817842383751217172/834945626634584134/unknown.png">
</p>

- **Torre**: movimenta-se em direção reta pelas colunas ou fileiras. A torre é considerada uma peça forte, tendo mais valor que bispo e cavalo.
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/817842383751217172/834945420064718849/unknown.png">
</p>

- **Peão**: movimenta-se apenas uma casa para frente e captura outros peões e peças na primeira casa diagonal superior. Caso uma peça ou peão fique na frente do peão, será impossível movê-lo. Somente se alguma peça adversária fique na sua diagonal acima, ele poderá capturá-la e mudar de coluna. No primeiro movimento de qualquer peão, ele poderá mover-se uma ou duas casas, a critério do enxadrista. Ao contrário das outras peças, o peão não pode mover-se para trás.
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/817842383751217172/834945720154456104/unknown.png">
</p>


## Lances especiais
- **Roque**: envolve a movimentação de duas peças em um único lance, o rei e uma das torres, tendo como objetivo da jogada proteger o rei. O movimento consiste no deslocamento do rei na primeira fileira em duas casas na direção da torre com a qual desejar "rocar", e a torre escolhida passa através do rei permanecendo na primeira casa após o "salto". É necessário atender aos seguintes requisitos: o rei e a torre envolvida não podem ter se movimentado nenhuma vez desde o início do jogo; as casas entre o rei e a torre devem estar desocupadas; o rei não pode estar em xeque, e também não pode ficar em xeque depois do roque; nenhuma das casas onde o rei passar ou ficar deverá estar no raio de ação de uma peça adversária. Isto não se aplica à torre envolvida
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/817842383751217172/834946525741187145/unknown.png">
  <img src="https://cdn.discordapp.com/attachments/817842383751217172/834946592342671380/unknown.png">
</p>

- **Passant**: envolve a movimentações de peões. Na ocasião do avanço por duas casas do peão, caso haja um peão adversário na coluna adjacente na quarta fileira para as brancas, ou quinta para as pretas, este pode capturar o peão como se "de passagem", movendo-o para a casa por onde o peão capturado passou sobre. A captura en passant deve ser feita imediatamente após o peão ter sido movido por duas casas, caso contrário o jogador adversário perde o direito de fazê-lo posteriormente. Tal movimento é a única ocasião no xadrez na qual a peça que captura não é movida para a casa ocupada pela peça capturada.

<p align="center" >
  <img width="328px" height="328px" src="https://cdn.discordapp.com/attachments/817842383751217172/834949217436696636/Ajedrez_captura_al_paso_del_peon.png">
</p>

- **Promoção**: obrigatória ao peão que ao alcançar a oitava fileira (que é a primeira fileira do adversário), deve ser promovido a cavalo, bispo, torre ou rainha, da mesma cor.

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/817842383751217172/834948261067358268/unknown.png">
</p>

## Tempo ao decorrer do jogo
Assim que um jogador move uma peça, o cronometro da jogada é reiniciado e o outro jogador tem até três minutos para realizar o movimento válido de alguma peça. Caso o tempo se esgote, é exibida uma mensagem informando que o tempo acabou, e o jogador pode optar por voltar para o jogo ou encerrá-lo, retornando a tela inicial.