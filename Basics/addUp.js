process.stdin.setEncoding('utf8'); // Setting the type of data
var stdin = process.openStdin(); // Var stdin can be whatever we are calling the global object proccess and its method openStdin...

process.stdout.write('Type your number: ') // this is the Function that uses console.log to wirte on console

stdin.addListener("data", function (a) { // we add a listener that is a function that takes a string and a function 

  let number = +a; // inside this block is your funtion
  let numbers = [1]; // we create an array
  while (number >= 0) { // 
    numbers.push(number)
      --number
    if (number == 1) {
      break
    }
  }
  let sorted = numbers.sort() // sort method sort is not rocket science!!
  let addUp = sorted.reduce((accumulator, currentValue) => accumulator + currentValue) // this is powerful to know
  console.log(sorted)
  console.log(addUp)
})

/* 
function writeThis() {
  console.log(this)
}

writeThis() */