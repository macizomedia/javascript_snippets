const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getAnswer(prompt) {
  const answer = await new Promise((resolve, reject) => {
    rl.question(`${prompt}\n`, (answer) => {
      resolve(answer)
    });
  })
  return answer
}
let arrQ = [
  '',
  'How old are you?',
  'When did you go?',
  'can you rap?'


]
let done = false
const playGame = async () => {
  let i = 1
  let prompt = ` \n ${arrQ[i]} #${i}, enter "q" to quit`
  while (!done) {
    i += 1
    const answer = await getAnswer(prompt)
    console.log(`${answer}`)
    prompt = processAnswer(answer, i)
  }
  rl.close()
}

const processAnswer = (answer, i) => {

  let prompt = `${arrQ[i]} #${i}, enter "q" to quit`

  if (answer === 'q') {
    console.log('User entered q to quit')
    done = true
    return
  } else if (answer <= 18) {
    console.log("listen to Blues")
  } else if (answer >= 18) {
    console.log("Dont waste time with bad music")
  }
  return prompt
}

playGame()