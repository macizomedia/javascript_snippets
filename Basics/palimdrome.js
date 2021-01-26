var stdin = process.openStdin();

console.log("type a word...")

stdin.addListener("data", function (d) {

  let phrase = d.toString().trim().toLowerCase();

  console.log("analizing...")

  let word = phrase.replace(/\s/g, '');

  let reversing = reverseString(word)


  function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }

  function isPalimdrome(word, reversed) {

    if (word == reversed) {
      console.log(reversed)
      console.log(`"seems that '${phrase}' is a Palimdrome, true!"`)
    } else {
      console.log(false)
    }
  }
  isPalimdrome(word, reversing)


  /*   let arr = []
    for(let i = 0; i < len; i++)
    {
      char = entry.charAt(i)
      arr.push(char)
    }
    let word = arr.join('')
    let _word = arr.reverse()
    let compare = _word.join('') */


});