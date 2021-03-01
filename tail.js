
const tail = function(arr) {
  if (arr.length < 2) {
    return [];
  }
  let newarr = arr.slice(1);
  return newarr;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

