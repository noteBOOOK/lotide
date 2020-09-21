const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);
// //console.log(eqObjects(ab, ba));
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);
// //console.log(eqObjects(ab, abc));


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);
// //console.log(eqObjects(cd, dc));
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);
// //console.log(eqObjects(cd, cd2));
