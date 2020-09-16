/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};
*/

const countLetters = function(sentence) {
  const results = {};
  let ignored = 0;
  const sentenceArray = sentence.toLowerCase().split("");
  for (const letter of sentenceArray) {
    if (letter === " " || letter === "." || letter === ",") {
      ignored += 1;
    } else {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

countLetters("lighthouse in the house");