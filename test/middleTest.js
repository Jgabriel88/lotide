const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4, 5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);