//let pecaEscolhida = "";


// let cores = (frame, inverter, whiteSlot, blackSlot,i)=>{

//     if (inverter){
//         frame = `${frame}\n${whiteSlot}`
//     }else {
//         frame = `${frame}\n${blackSlot}`;
//     }
//     return frame;
// }
// let decidePeca = (i)=>{
//     if ([0,7,56,63].indexOf(i)!= -1 ) return "T"
//     if ([1,6,57,62].indexOf(i)!= -1 ) return "H"
//     if ([2,5,58,61].indexOf(i)!= -1 ) return "B"
//     if ([3,60].indexOf(i)!= -1 ) return "K"
//     if ([4,59].indexOf(i)!= -1 ) return "Q"
//     else return "P"
// }
// let montaTabuleiro = ()=>{
//     let frame = ``
//     let blackSlot = ''
//     let whiteSlot = ''
//     let arr = [8,16,24,32,40,48,56]
//     let inverteu = false;
//     for (let i=0; i<64; i++){
        
//         whiteSlot = `<div class="slot white" id="slot-${i}"></div>  ` 
//         blackSlot = `<div class="slot black" id="slot-${i}"></div>  `

//         if (arr.indexOf(i)!= -1){
//             inverteu = !inverteu 
//         } 
//         if (!inverteu){
//             if (i%2 ==0){
//                 frame = cores(frame, 0, whiteSlot, blackSlot,i)
//             }else{
//                 frame = cores(frame, 1, whiteSlot, blackSlot, i)
//             }            

//         }else{
//             if (i%2 ==0){
//                 frame = cores(frame, 1, whiteSlot, blackSlot, i)
//             }else{
//                 frame = cores(frame, 0, whiteSlot, blackSlot,i)
//             }     
//         }
//     }

//     document.getElementById("frame").innerHTML = frame
// }
// let inserePecas = ()=>{

//     for (let i = 0;i<16; i++ ){
//         let letter = decidePeca(i);
//         document.getElementById(`slot-${i}`).innerHTML = `<p onclick="selecionaMovimentacao(${i})">${letter}</p>`
//     }
//     for (let i = 48;i<64; i++ ){
//         let letter = decidePeca(i);
//         document.getElementById(`slot-${i}`).innerHTML =`<p onclick="selecionaMovimentacao(${i})">${letter}</p>`
//     }
// }
// let getPeca = (index)=>{
//     return document.getElementById(`slot-${index}`).firstChild;
// }
// let pintaPossiveisJogadas=(index)=>{

//     setTimeout( ()=>{
//         document.getElementById(`slot-${index+8}`).classList.add("selected");
//         document.getElementById(`slot-${index+16}`).classList.add("selected");

//     }, 200)

// }
// let removePintados = ()=>{
//     let selected = document.getElementsByClassName("selected")

//     if (selected.length != 0){
//         for (let i = 0; i<selected.length; i++){

//             selected[i].classList.remove("selected")
//         }
//     }
// }
// function selecionaMovimentacao(index){
//     let peca = getPeca(index);
//     pecaEscolhida = peca; 
//     // removePintados()
//     if (peca.innerText == "P"){
//         pintaPossiveisJogadas(index)
//     }
    
//     let possiveisJogadas = document.getElementsByClassName("selected");
//     console.log(possiveisJogadas)

// }
// function move(id){
//     console.log(id)
// }
// function init() {   
//     montaTabuleiro()
//     inserePecas()
// }



function init (){

    
}
window.onload = init;
var board1 = Chessboard('board1',{
    draggable:true,
    // position:"start",
    onDragStart:(res,ponse)=>{

        console.log(`Pegou o boneco ${res}${ponse}` )
    },
    onDrop:(res,ponse,out)=>{
        newFunction(ponse, res);
        console.log(`Largou o boneco ${res}${ponse}${out}` )
    }
})

function newFunction(ponse, res) {
    board1.move(`${ponse}-${res}`);
}
