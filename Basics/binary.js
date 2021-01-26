let numbers = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]
let operated = []

var binary = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let base = 2;
    result = Math.pow(base, arr[i])
    operated.push(result)
  }
    return result;
}

binary(numbers)

console.log(operated)
const binaryArrayToNumber = arr => {
    let len = arr.length // How many items in the array
    let pow = [] // unshift of position values
    let decimal = [] // Array of each index 
    for(let i = 0; i <= len - 1; i++){ // select the last item of the array
        pow.unshift(i) // adds each items number value 1, 2, 3, 4, 5 ... 
    }
    arr.forEach((x,index) => { // where index is 0, 1, 2, 3 ...
        decimal.push(x*2**pow[index]) // x(2^n) where x is de binary value and index is n with root 2
    })
    let toDecimal = decimal.reduce((acc, curr) => acc + curr, 0) // the addition of each item inside decimal array
    return toDecimal
};
console.log(binaryArrayToNumber([1, 0, 1, 1, 0, 1, 1, 1]))

