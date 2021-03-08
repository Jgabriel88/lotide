const middle = require('../middle')
const assert = require('chai').assert;



describe("#middle", () => {
  it("Shoud return the midle of the array [3, 4] for [1, 2, 3, 4, 5, 6] ", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("Shoud return the midle of the array [3] for [1, 2, 3, 4, 5] ", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])

  })
});


