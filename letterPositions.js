const assertArraysEqual = function(arrayOne, arrayTwo) {

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne.length !== arrayTwo.length) {
      console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
      return;
    }
    if (arrayOne[i] !== arrayTwo[i]) {
      console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
      return;
    }
  }
  console.log(`Assertion Passed: ${arrayOne} === ${arrayTwo}`);
};





const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  console.log(results);
  return results;
};





assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello").h, [1]);