const eqObjects = function(object1, object2) {
  let firstKeys = Object.keys(object1);
  let secondKeys = Object.keys(object2);
  if (firstKeys.length !== secondKeys.length) {
    return false;
  } else {
    for (let key of firstKeys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

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

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const firstObject = {
  name: "Jason",
  gender: "male",
  megaman: true
};

const secondObject = {
  name: "Superman",
  gender: "male",
  megaman: false
};


assertObjectsEqual(ab, ba); // => true
assertObjectsEqual(ab, abc); // => false
assertObjectsEqual(firstObject, secondObject); // => false
*/