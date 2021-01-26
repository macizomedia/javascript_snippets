var stdin = process.openStdin();

process.stdout.write('how big is you want the tree? ')

stdin.addListener("data", function (d) {

  let stars = +d;
  for (let i = 1; i < stars; i++) {
    console.log("*".repeat(i))
  }
  console.log("here you have it!")

})