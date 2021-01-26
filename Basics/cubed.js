process.stdin.setEncoding('utf8');
var input = process.openStdin();

process.stdout.write('Enter Data: ')

input.addListener("data", function (a) {

  let data = Object.values(a);
  //console.log(data)
  data.pop();

  let sum = []
  for (let i = 0; i < data.length; i++) {
    var num = data[i];
    var num3 = (num ** 3);
    sum.push(num3)
  }

  //console.log(sum)
  console.log(`"${data[0]} times 3 is ${sum[0]} \n ${data[1]} times 3 is ${sum[1]} \n ${data[2]} times 3 is ${sum[2]}"`)
  console.log(`"all sumUp into: ${sum.reduce((acc, prev) => acc + prev)}"`)
})