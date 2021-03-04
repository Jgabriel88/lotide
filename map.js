// An array to map
// A callback function

const words = ["ground", "control", "to", "major", "tom"];

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

const eqArrays = function (arrayOne, arrayTwo) {
  for (i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false
    }
  }
  return true
}


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results1, ['c', 'g', 't', 'm', 't'])
assertArraysEqual(results1, ['g', 'c', 't', 't', 't'])
assertArraysEqual(results1, ['t', 'c', 't', 'm', 'g'])
assertArraysEqual(results1, ['t', 'c', 't', 'm', 'g', 'h'])
assertArraysEqual(results1, ['t', 'c', 't', 'm'])
