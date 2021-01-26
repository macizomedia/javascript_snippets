const hr = (text) => `"---------${text}-----------"` 
const line = "------------------------------------------------------------------"
const logger = (fn) => {return console.log(`"the result is ${fn}"`);}


hr("Understanding variable & Functions")

const getRandom = function(min, max) {
  let result = Math.floor(Math.random()*(max - min) + 1)
  // The max and min are inclusive
  return result
}

logger(getRandom(1,6))
logger(getRandom(1,6))
logger(getRandom(1,6))

line

// var    | Reassing: Yes | Redeclare: Yes | Hoist: Yes; Function
// const  | Reassing: Yes | Redeclare: No | Hoist: No; BLOCK
// let    | Reassing: No | Redeclare: No | Hoist: No; BLOCK

/*
Hoisting is a JavaScript mechanism ehre variables and function declarations are moved to the top of their scope before code execution. Is important to note hoisting only moes the declaration. The assigments are left in place.
*/

console.log(typeof someVar)
//console.log(someVar)
hr("what is hoisting?")
function hoist(){
  a = 20;
  var b = 100
}
hoist() //Calling the functtion 
console.log(a); // All Undeclared variable are GLOBAL variables
//console.log(b)
/*
alway declare variables regardless of whether they are in a function or global scope. this deliniates how the interpreter should handle them at run time"
*/

hr("THE DICE CHALLANGE")

var randomFloor = () => {return Math.floor(Math.random()* 6) + 1 }

var roll = randomFloor()

var rounds = []

rounds

roll
roll
roll
roll

var rolled = rounds.push(roll)
var play = rounds.unshift(randomFloor())
var playAgain = rounds.unshift(roll)

var score= rounds.valueOf()
const counting = rounds.toString()
logger(rounds)
rounds
score
counting

hr("REFACTORING")


const playing = () => {
  
    const game = [];
  for (let round = 0; round < 3; round++ ){
    let luck = randomFloor();
    let shake = luck;
    console.log(shake);
    game.push(shake);
    var score = game.join()
  } 
  return score
}

const playerOne = playing()
const playerTwo = playing()

logger(`I play first and got ${playerOne} then she play and got ${playerTwo}`)
