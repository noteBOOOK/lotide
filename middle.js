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
    console.log(`✅✅✅ Assertion Passed: "${firstArray}" === "${secondArray}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${firstArray}" !== "${secondArray}"`);
  }
};

const middle = function(listOfNumbers) {
  let middleNums = [];
  const midValue = listOfNumbers.length / 2;
  if (listOfNumbers.length <=2) {
    return middleNums;
  } else {
    if (listOfNumbers.length % 2 !== 0) {
      middleNums.push(listOfNumbers[Math.floor(midValue)]);
      return middleNums;
    } else {
      middleNums.push(listOfNumbers[midValue - 1]);
      middleNums.push(listOfNumbers[midValue]);
      return middleNums;
    }
  }
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(middle([1, 2]), []);