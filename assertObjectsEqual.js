const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;

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