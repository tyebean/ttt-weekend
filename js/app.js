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
// console.log(wins)
// console.log(wins[1])
//if these winning vals reduce to a val of 3 then someone has won

/*---------------------------- Variables (state) ----------------------------*/

let boardArr, turn, winner 
//boardArr - reps squares on board (array)
//turn - tracks whos turn it is
//winner - 
//variable winner rep
//a tie has occured
//game still in play


/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll('.square')
const message = document.querySelector('#message') 

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/


init()
function init(){
  boardArr = [null, null, null, null, null, null, null, null, null]
  //The null values will refer to a square being empty, 1 will translate to an X, and -1 will translate to an O
  console.log(boardArr)
  turn = 1
  winner = null 
  //render()
}

boardArr.forEach((square, idx) => {
  idx = squares[0].length
  square = 1
  if(square === 1){
    //put an x on that square? 
  } else if (winner === -1){
    //
  }
  
  // console.log(idx)
})

function render(){
  // for (let i = 0; i < boardArr.length; i++){
  //   squares[i].style.backgroundColor = 'red'
  //   //later note: style each square dependant on the value contained in the current cell being iterated over (-1, 1, or null.)
  // } 
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


//handle click fucntion #5
// obtain the index of the square that is being clicked on (use squares[1]) to get the index of the amount of swuares we have?

// function handleClick(){
//   console.log(squares[1])
// }
// console.log(handleClick)


//the secret is that when you gather up the .square class in the JS file, it creates an array-like object
//**which you can then correspond with the index of your board array