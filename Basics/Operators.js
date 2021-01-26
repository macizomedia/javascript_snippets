lg = (op) => {return console.log(`"answer is " ${op}`)}
li = (tx) => {return console.log(`##### ${tx} #####`)}
// What Type
li("type")
var num = "3"; // The single equal symbol is reserve to asign values

lg(3=="3") // Double Equality checks if its two opeands are equal 

lg(num==3)

lg(3==num)

lg(3===num) // Sctric Equality Operator the strict equality operator always considers operands of different types to be different.
li("Boolean & Logical NOT")
var bool = true

lg(!bool) 

//The logical NOT (!) operator (logical complement, negation) it returns false if its single operand can be converted to true; otherwise, returns true.

//The logical OR expression is evaluated left to right, it is tested for possible "short-circuit" 
li("|| OR Logical Operator")
let firstName, givenName;

firstName = 'Bob';


let name = givenName || firstName || 'John' //John wont be evaluate as firstName has a value

lg(name)
lg(!name ? givenName || 'Rudy' : 'John')

li("&& AND || OR")

const isDogBetter = true;
const isCatBetter = false;

lg(isDogBetter && isCatBetter) 

lg(isDogBetter || isCatBetter) 

lg(!isDogBetter || isCatBetter) 

const atoms = 1000000000000000000
const sandGrain = Number.MAX_SAFE_INTEGER + 1;
const stars= BigInt(0b11111111111111111111111111111111111111111111111111);


//BigInt is a built-in object that provides a way to represent whole numbers larger than 253 - 

li("Big Numbers")
var atom = atoms.toPrecision(2) 
lg(sandGrain)
lg(stars)
lg(atom < sandGrain && atom > stars)
lg(atoms.toPrecision(2) > stars)
lg()

li("ternary")

isDog = true;
speedChek = 30;
age = 18;

isStudent = false;

isOdd = (x) => {return x % 2}

lg(isOdd(30) === 0)
lg((isOdd(939) === 0 )? "isOdd" : "isEven")