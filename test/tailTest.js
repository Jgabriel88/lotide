const assertEqual = require('../assertEqual');
const tail = require('../tail')
const assert = require('chai').assert;


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

describe("slices the first index of an array and return a new array with the rest", () => {
  it("returns 2 for [Hello, Lighthouse, Labs].length", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("deepequal test", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
});
