var stdin = process.openStdin();

process.stdout.write('will be that number happy? ')

stdin.addListener("data", function (d) {

  let num = Number(d);
  const digits = [...String(num)].map(Number);

  let sqred = []
  digits.forEach(digit => {
    let sqr = digit ** 2;
    sqred.push(sqr)
  })

  let sum = sqred[0] + sqred[1]
  let newNumber = [...String(sum)].map(Number)

  let sqred2 = []
  newNumber.forEach(digit => {
    let sqr2 = digit ** 2;
    sqred2.push(sqr2)
  })
  console.log(sqred2)
});