

const countLetters = function (str) {
  let letterCounter = {};
  for (let letter of str) {
    let acumulator = 0;
    if (letter !== " ") {
      if (letterCounter[letter]) {
        letterCounter[letter] += 1;
      } else {
        letterCounter[letter] = 1;
      }
    }
  }
  return letterCounter;
};

const test = "lighthouse in the house";
const toTest = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
console.log(countLetters(test));
// assertEqual(countLetters(test), toTest)