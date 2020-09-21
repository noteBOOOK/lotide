const tail = require("../tail");
const assertEqual = require("../assertEqual");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const result2 = tail(["Hello", "Lighthouse", "Labs", "Two"]);
assertEqual(result2.length, 3);
assertEqual(result2[0], "Lighthouse");
assertEqual(result2[1], "Labs");
assertEqual(result2[2], "Two");
