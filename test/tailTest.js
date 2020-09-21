const tail = require("../tail");
const assert = require("chai").assert;

const result = tail(['Hello', 'Lighthouse', 'Labs']);
const result2 = tail(["Hello", "Lighthouse", "Labs", "Two"]);

describe("#tail", () => {
  it("Should return 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.equal(result.length, 2);
  });

  it("Should return 'Lighthouse' as first element for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.equal(result[0], 'Lighthouse');
  });

  it("Should return 'Labs' as second element for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.equal(result[1], 'Labs');
  });
});
