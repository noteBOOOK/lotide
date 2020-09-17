const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  //Create container to store output
  const results = [];
  //Loop through each item of the array
  for (let item of array) {
    //Pushes the returned value of the callback function on the item in the loop to the results array
    results.push(callback(item));
  }
  //Return output
  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);