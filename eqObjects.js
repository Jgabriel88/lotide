const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

