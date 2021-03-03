const words = ["Gabriel", "Lucas", "Alexandre"]
const toRemove = ["Alexandre", "Gabriel"]
let cleaned = []
const without = function (words, toRemove) {
  for (i = 0; i < words.length; i++) {
    if (!toRemove.includes(words[i])) {
      cleaned.push(words[i])
    }
  }
  return cleaned
};


console.log("The original array is: ", words)
console.log("To be removed: ", toRemove)
console.log("The new array is: ", without(words, toRemove))


// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


// const assertArraysEqual = function (arrayOne, arrayTwo) {

//   for (i = 0; i < arrayOne.length; i++) {
//     if (arrayOne.length !== arrayTwo.length) {
//       console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
//       return
//     }
//     if (arrayOne[i] !== arrayTwo[i]) {
//       console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
//       return
//     }
//   }
//   console.log(`Assertion Passed: ${arrayOne} === ${arrayTwo}`)
// }


// const eqArrays = function (arrayOne, arrayTwo) {
//   for (i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false
//     }
//   }
//   return true
// }

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

