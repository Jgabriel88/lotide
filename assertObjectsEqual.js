const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  } else {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1).sort();
  let object2Keys = Object.keys(object2).sort();
  let object1Values = Object.values(object1).sort();
  let object2Values = Object.values(object2).sort();

  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else if (eqArrays(object1Keys, object2Keys) && eqArrays(object1Values, object2Values)) {
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  // console.log(`Example label: ${inspect(expected)}`);

  if (eqObjects(actual, expected)) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`😩😩😩 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const ab = { a: "3", b: "2", c: [1, 2, 3] };
const ba = { a: "3", b: "2", c: [1, 2, 3] };
console.log(assertObjectsEqual(ab, ba));


// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

