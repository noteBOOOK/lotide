# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @noteboook/lotide`

**Require it:**

`const _ = require('@noteboook/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.head(...)`: Return the first value of an array input
* `_.tail(...)`: Return the remaining vaues of an array input minus the head
* `_.middle(...)`: Return the middle value of an array input, if array input has 'even' amount of values, return middle two values. If input array is 2 or less, return an empty array.
* `_.assertArraysEqual(...)`: Uses eqArrays with an array input and expected outcome to assert if the arrays are equal or not
* `_.assertEqual(...)`: Takes in two value inputs and asserts if they are equal or not
* `_.assertObjectsEqual(...)`: Uses eqObjects with an object input and expected outcome to assert if the objects are equal or not
* `_.countLetters(...)`: Takes in a string input and counts the amount of times each letter was used, returns an object with the letters and the count
* `_.countOnly(...)`: Takes in an array of values and returns an object with a list of the array values and the amount of times it is listed
* `_.eqArrays(...)`: Takes in two array inputs to see if they are equal or not
* `_.eqObjects(...)`: Takes in two object inputs to see if they are equal or not
* `_.findKey(...)`: Takes in an object input and value to determine the first object property that contains the value input
* `_.findKeyByValue(...)`: Takes in an object input and a value to return the key that contains that specific value
* `_.letterPositions(...)`: Takes in a string input value and returns a list of letters and the index position of when each letter occured in the input value
* `_.takeUntil(...)`: Takes in an array input and condition. Take values from array input into new array until the condition has been met;
* `_.without(...)`: Takes in two array inputs. Creates a new array with the values from the first array inputs, excluding any values that appear in the second array input

