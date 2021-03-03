
const eqArrays = function (arrayOne, arrayTwo) {
  for (i = 0; i < arrayOne.length; i++) {
    if (arrayOne.length !== arrayTwo.length) {
      return false
    }
    if (arrayOne[i] !== arrayTwo[i]) {
      return false
    }
  }
  return true
}
const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`Assertion Passed: ${arrayOne} === ${arrayTwo}`)
  } else {
    console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`)

  }
}

const middle = function (arr) {
  const newArray = [];
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    newArray.push(arr[Math.floor(arr.length / 2)]);
    return newArray
  } else {
    newArray.push(arr[((arr.length / 2) - 1)]);
    newArray.push(arr[(arr.length / 2)]);
    return newArray;
  }
}

// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3]

// console.log(middle([1, 2, 3]))

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4, 5])