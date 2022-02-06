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

squares.forEach(square => square.addEventListener('click', handleClick))

/*-------------------------------- Functions --------------------------------*/


init()
function init(){
  boardArr = [1, null, null, null, null, null, null, null, null]
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

function handleClick(evt){
  const index = evt.target.id.replace('sq', '')
  if (boardArr[index] !== null) {
    return
  }
  if (winner !== null){
    return
  }
  boardArr[index] = turn
  turn = turn * 1 
  winner = getWinner()
}

function getWinner(){
  console.log('getting winner B)')
}
getWinner()


		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.


