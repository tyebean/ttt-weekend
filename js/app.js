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


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
// init()
function init(){
  console.log('init function')
  //should initilize the state variables
  //init board array to 9 nulls to rep empty squares
  // squareArr = [null, null, null, null, null, null, null, null, null]
  //   //9 elements will 'map' to each square
  // let mapSquare = squareArr.map(function(a){
  //   //use a for loop to map each null to each indv square using the index (0 = top left quare and so on)
  // })
    //index 0 reps top left square and 1 reps top mid square

  //init whos turn it is
  //init winner var to null (no winner yet)
  //render() these state variables with an outside render function
}


function render(){
  //loop over board array 
}
  boardArr = [null, null, null, null, null, null, null, null, null]
  console.log(boardArr)
    //9 elements will 'map' to each square
  let mapSquares = boardArr.map(function(a){
    //use a for loop to map each null to each indv square using the index (0 = top left quare and so on) 
    for(let i = 0; i boardArr.length; i++){
      console.log("hey")
    }
  })
console.log(mapSquare)

