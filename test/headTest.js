const head = require("../head.js");
const assert = require("chai").assert;

describe("#head", () => {
  it("Should return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head[1, 2, 3]);
  });
  it("Should return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});