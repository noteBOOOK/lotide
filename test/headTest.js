const head = require("../head.js");
const assertEqual = require("../assertEqual");

assertEqual(head("hello"), "h");
assertEqual(head("hello"), "e");