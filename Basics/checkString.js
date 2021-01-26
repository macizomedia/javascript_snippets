var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

/* **** INTERFACE **** */

var questions = [
  "type your srting ",
  "type your word "
]

var answers = []

function ask(i) {
  process.stdout.write(`${questions[i]}`)
  process.stdout.write(">> ")
}

rl.on('line', function (a) {

  answers.push(a.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit()
  }
})

/* **** LOGIC GOES HERE **** */
function matchString(string, word) {

  let initials = string;
  let _word = word;
  //console.log(typeof (initials));

  var isMatch = _word.match(initials) ? true : false;
  //console.log(isMatch)
  return isMatch
}

process.on('exit', function () {
  isMatch = matchString(answers[0], answers[1]);
  process.stdout.write(`"does ${answers[0]} and ${answers[1]} match? ${isMatch}"\n`)
});

ask(0)



/* 
process.stdin.setEncoding('utf8');

const input = process.stdout.write('Enter Data: ')

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('data: ' + chunk);
  }
});

process.stdin.on('end', function () {
  process.stdout.write('end');
}); */

/* // print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
}); */

str = '\u00bd + \u00bc = \u00be';

console.log(str + ": " + str.length + " characters, " +
  Buffer.byteLength(str, 'utf8') + " bytes");