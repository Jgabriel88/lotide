const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

assertEqual(eqArrays([1, 7, 8, 5, 2, 1, 4], [1, 7, 8, 5, 2, 1, 4]), true);