/*-------------------------------- Constants --------------------------------*/
//constants contain 8 arrays of the winning possibilities




/*---------------------------- Variables (state) ----------------------------*/

let boardArr, turn, winner 
//variable winner reps
//a player that won
//a tie has occured
//game still in play


/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll('.square')
const message = document.querySelector('#message') 

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
function init(){
  console.log('init function SHELL works') 
  boardArr = [null, null, null, null, null, null, null, null, null] 
  console.log(boardArr)
  let playerX = 1
  let playerO = -1
  console.log(playerX, playerO)
  turn = 1
  winner = null 
  //render()
}








function render(){
  for (let i = 0; i < boardArr.length; i++){
    squares[i].style.backgroundColor = 'red'
    //later note: style each square dependant on the value contained in the current cell being iterated over (-1, 1, or null.)
  }
  if (winner === 1) {
    // later note: render these msgs 
    //render playerX's turn
    console.log('plr 1')
  } else if (winner === -1) {
    //render plrO's turn
    console.log('plr -1')
  } else if (winner === 'T') {
    //render its a tie
    console.log("it's a Tie")
  } else {
    //render congrats!
    console.log("congrats! this player won!")
  }
} 
render() 