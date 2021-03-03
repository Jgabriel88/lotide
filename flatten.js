const flatten = function (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray.sort((a, b) => a - b);
};

const arr1 = [[5, 6], 3, [7, 8, 9]];
console.log(flatten(arr1));
