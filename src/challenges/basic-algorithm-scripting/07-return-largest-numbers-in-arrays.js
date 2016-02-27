/*
 * Bonfire: Return Largest Numbers in Arrays
 * http://www.freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays
 *
 * Return an array consisting of the largest number from each provided
 * sub-array. For simplicity, the provided array will contain
 * exactly 4 sub-arrays.
 *
 * Remember, you can iterate through an array with a simple for loop,
 * and access each member with array syntax arr[i] .
 *
 */


function largestOfFour(arr) {
  'use strict';

  return arr
    .map(val =>
      Math.max.apply(null, val)
    );
}


/* exports */
module.exports = largestOfFour;
