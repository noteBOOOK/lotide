const { assertArraysEqual, eqArrays } = require('./index');


const result = [];

const flatten = function(array) {
  array.forEach((num) => {
    if (Array.isArray(num)) {
      flatten(num);
    } else {
    result.push(num);
    }
  })
  return result;
};


console.log(flatten([1, 2, [3, 4], [[5], [6]]]));