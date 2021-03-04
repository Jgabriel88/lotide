const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`😩😩😩 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const eqArrays = function(firstArr, secondArr) {
  // console.log(firstArr);
  // console.log(secondArr);
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
    // } else if(Object.keys(object1) === Object.keys(object2) && Object.values(object1) === Object.values(object2) {
    // return true;
  } else if (eqArrays(object1Keys, object2Keys) && eqArrays(object1Values, object2Values)) {
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false