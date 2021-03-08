const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head([5, 6, 7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 4);
assertEqual(head([1]), 1);
assertEqual(head([]), 4);