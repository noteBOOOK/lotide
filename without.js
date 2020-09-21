const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const without = function (firstArray, secondArray) {
  let output = [];
  for (let i = 0; i < firstArray.length; i++) {
    let current = firstArray[i];
    if (!secondArray.includes(current)) {
      output.push(current);
      console.log(current);
    }
  }
  console.log(output);
  return output;
};

module.exports = without;

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
