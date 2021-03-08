const tail = function (arr) {
  if (arr.length < 2) {
    return [];
  }
  let newarr = arr.slice(1);
  return newarr;
};

module.exports = tail

