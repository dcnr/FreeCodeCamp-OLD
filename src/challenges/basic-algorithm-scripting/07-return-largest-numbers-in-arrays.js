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

  const answer = [];
  let largest = 0;

  for (let i = 0; i < arr.length; ++i) {
    largest = 0;
    for (let j = 0; j < arr[i].length; ++j) {
      if (arr[i][j] >= largest) {
        largest = arr[i][j];
      }
    }
    answer.push(largest);
  }

  return answer;
}


/* exports */
module.exports = largestOfFour;
