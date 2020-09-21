const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3", "4", "five"], ["1", "2", "3", "4", "five"]), true);