const takeUntil = function(array, callback) {
  //callback = x => x < 0;
  //Create empty output array
  let results = [];
  //Create a counter for array index
  let counter = 0;
  //While the callback function returns false with the values of the array,
  while (!callback(array[counter])) {
    //Push the value to the results array
    results.push(array[counter]);
    //Increment counter
    counter++;
  }
  return results;
};

module.exports = takeUntil;


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);