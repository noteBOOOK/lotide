
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};


const countLetters = function(sentence) {
  const results = {};
  const lowerCaseSentence = sentence.toLowerCase();
  for (const letter of lowerCaseSentence) {
    if (letter !== " " && letter !== "." && letter !== ",") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;