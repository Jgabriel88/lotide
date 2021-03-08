const tail = require('../tail')
const assert = require('chai').assert;


describe("slices the first index of an array and return a new array with the rest", () => {
  it("returns 2 for [Hello, Lighthouse, Labs].length", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("deepequal test", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
});
