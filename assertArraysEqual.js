// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (arrayOne, arrayTwo) {

  for (i = 0; i < arrayOne.length; i++) {
    if (arrayOne.length !== arrayTwo.length) {
      console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
      return
    }
    if (arrayOne[i] !== arrayTwo[i]) {
      console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
      return
    }
  }
  console.log(`Assertion Passed: ${arrayOne} === ${arrayTwo}`)
}


assertArraysEqual([1, 2, 3], [1, 2, 3, 5])
assertArraysEqual([1, 2, 3, 4], [1, 2, 3])
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual(["abc", "def", "ghi", 4, 2, 1], ["abc", "def", "ghi", 4, 2, 1])