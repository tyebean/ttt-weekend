/*-------------------------------- Constants --------------------------------*/

const wins = [
  [sq0, sq1, sq2],
  [sq0, sq4, sq8],
  [sq0, sq3, sq6],
  [sq1, sq4, sq7],
  [sq2, sq4, sq6],
  [sq2, sq5, sq8],
  [sq3, sq4, sq5],
  [sq6, sq7, sq8]
]


/*---------------------------- Variables (state) ----------------------------*/

let boardArr, turn, winner 


/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll('.square')
const message = document.querySelector('#message') 

/*----------------------------- Event Listeners -----------------------------*/

addEventListener('click', function(a){
  // handleClick()
  // console.log(event.target.id)
})



/*-------------------------------- Functions --------------------------------*/


init()
function init(){
  boardArr = [1, -1, null, null, null, null, null, null, null]
  turn = 1
  winner = null 
  render()
}

function render(){
  boardArr.forEach((square, idx) => {
    if(square === 1){
      squares[idx].textContent = "X"
    } else if (square === -1) {
      squares[idx].textContent = "O"
    } else square === null 
    })

    if (winner !== null) {
      console.log('its ${players} turn')
    } else if (winner === 1) {
      message.textContent = "Congrats! Player 1 Won"
    } else if (winner === -1) {
      message.textContent = "Congrats! Player 2 Won"
    } else if (winner === 't') {
      message.textContent = "The game resulted in a tie"
    }
} 

//handle click function goals
  //obtain the index of the square that was clicked by:
    //getting the index from an id assigned to the element in the HTML
    //ech id corrosponds to a index in the board arr 
  //next, look at 5.2

function handleClick(){
  
}
console.log(boardArr)
console.log(boardArr.length -1) //????
console.log(squares)
console.log(squares.length)

