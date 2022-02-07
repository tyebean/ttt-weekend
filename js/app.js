/*-------------------------------- Constants --------------------------------*/

const wins = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
]


/*---------------------------- Variables (state) ----------------------------*/

let boardArr, turn, winner, numOfTurns


/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll('.square')
const message = document.querySelector('#message') 
const btn = document.querySelector('#btn')

/*----------------------------- Event Listeners -----------------------------*/

squares.forEach(square => square.addEventListener('click', handleClick))

btn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/


init()
function init(){
  boardArr = 
  [null, null, null,
  null, null, null, 
  null, null, null]
  turn = 1
  winner = null 
  render()
  numOfTurns = 0
}

//inside of init
//plrturn = 1
//turncount = 0
//write an if statement 
//if playerturn === 1 
//change message to reflect this^
//else player trn === -1

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
  turn = turn * -1 
  numOfTurns += 1
  render()
  getWinner()
}


function getWinner(){
  console.log(boardArr)
  for(let i = 0; i < wins.length; i++){
    const a = wins[i][0]
    const b = wins[i][1]
    const c = wins[i][2]
    if (boardArr[a] + boardArr[b] + boardArr[c] === 3){
    message.textContent = 'X wins'
    //stop the game using stopndouble button click logic
    } else if (boardArr[a] + boardArr[b] + boardArr[c] === -3) {
      message.textContent = 'O wins'
    }
  }
   //figure out if there is a tie
  if (numOfTurns === 9 && winner === null) {
    winner = 'T'
    message.textContent = 'There was a Tie.'
  } else {
    return null
  }
}









