const middle = function (arr) {
  const newArray = [];
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    newArray.push(arr[Math.floor(arr.length / 2)]);
    return newArray;
  } else {
    newArray.push(arr[((arr.length / 2) - 1)]);
    newArray.push(arr[(arr.length / 2)]);
    return newArray;
  }
};

// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3]

// console.log(middle([1, 2, 3]))

module.exports = middle