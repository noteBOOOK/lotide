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

module.exports = middle;