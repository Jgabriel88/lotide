
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      if (object1[key].length !== object2[key].length) {
        return false
      } else {
        for (let i = 0; i < object1[key].length; i++) {
          if (object1[key][i] === object2[key][i]) {
          } else {
            return false
          }
        }
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false
      }
    }
  } return true
};


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}.`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}.`);
  }
};



const ab = { a: "3", b: "2", c: [1, 2, 3] };
const ba = { a: "3", b: "2", c: [1, 2, 3] };
assertObjectsEqual(ab, ba);


