const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;
const expect = require("chai").expect;

describe("#middle", () => {
  it("Should return [2] for [1, 2, 3]", () => {
    let input = middle([1, 2, 3]);
    let expectedOutput = [2];
    expect(input).to.eql(expectedOutput);
  });

  it("Should return [2, 3] for [1, 2, 3, 4]", () => {
    let input = middle([1, 2, 3, 4]);
    let expectedOutput = [2, 3];
    expect(input).to.eql(expectedOutput);
  });

  it("Should return [3] for [1, 2, 3, 4, 5]", () => {
    let input = middle([1, 2, 3, 4, 5]);
    let expectedOutput = [3];
    expect(input).to.eql(expectedOutput);
  });

  it("Should return [] for [1, 2]", () => {
    let input = middle([1, 2]);
    let expectedOutput = [];
    expect(input).to.eql(expectedOutput);
  });
});