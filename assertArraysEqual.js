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


const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log("😁 Assertion Passed:", arrOne, "===", arrTwo);

  } else {
    console.log("😩 Assertion Failed:", arrOne, "!==", arrTwo);
  }

};

assertArraysEqual([1, 2, 3, 5], [1, 2, 3]);

