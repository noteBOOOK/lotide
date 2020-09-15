const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: Both arrays are identical!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: The arrays are different!`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);