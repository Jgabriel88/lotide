// FUNCTION IMPLEMENTATION

const eqArrays = function (arrayOne, arrayTwo) {
  for (i = 0; i < arrayOne.length; i++) {
    assertEqual(arrayOne[i], arrayTwo[i])
  }
  return
}

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)