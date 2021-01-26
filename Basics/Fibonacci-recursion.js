fib = num => num < 2 ? num : fib(num - 1) + fib(num - 2)

let i = 0
while (i < 10) {
  console.log(fib(i));
  i++
}