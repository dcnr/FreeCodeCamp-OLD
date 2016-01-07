/*
 * Bonfire: Sum All Numbers in a Range
 * http://www.freecodecamp.com/challenges/bonfire-sum-all-numbers-in-a-range
 *
 * We'll pass you an array of two numbers. Return the sum of those two
 * numbers and all numbers between them.
 *
 * The lowest number will not always come first.
 *
 */


function sumAll(arr) {
  'use strict';

  arr.sort((a, b) => a - b);

  let range = new Array(arr[1] - arr[0] + 1)
    .fill(0);

  let i = arr[0];
  const result = range
    .map(v => v = i++)
    .reduce((a, b) => a + b);


  return result;
}


/* exports */
module.exports = sumAll;
