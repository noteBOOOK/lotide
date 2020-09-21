const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const results = {};
  const lowerCase = sentence.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i] !== " " && lowerCase[i] !== "." && lowerCase[i] !== ",") {
      if (results[lowerCase[i]]) {
        results[lowerCase[i]].push(i);
      } else {
        results[lowerCase[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions("lighthouse in the house"));

