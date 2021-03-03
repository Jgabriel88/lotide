const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countOnly = function (allItems, itemsToCount) {
  const result1 = {};
  for (const nameToFind in itemsToCount) {
    if (itemsToCount[nameToFind]) {
      let counter = 0;
      for (const name of allItems) {
        if (name === nameToFind) {
          result1[name] = ++counter;
        }
      }
    }
  }
  return result1;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
