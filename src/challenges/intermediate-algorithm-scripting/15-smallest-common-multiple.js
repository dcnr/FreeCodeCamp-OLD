/* Bonfire: Smallest Common Multiple
 * http://www.freecodecamp.com/challenges/bonfire-smallest-common-multiple
 *
 * Find the smallest common multiple of the provided parameters that
 * can be evenly divided by both, as well as by all sequential numbers
 * in the range between these parameters.
 *
 * The range will be an array of two numbers that will not necessarily
 * be in numerical order.
 *
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3
 * that is evenly divisible by all numbers between 1 and 3.
 *
 */


function smallestCommons(arr) {
  'use strict';

  /********************* HELPERS ********************/
  function makeRange(a) {
    const min = a[0];
    const max = a[1];

    const range = Array
      .apply(null, new Array(max))
      .map((v, i) => i + min);

    return range;
  }

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return a / gcd(a, b) * b;
  }

  /**************************************************/


  const range = makeRange(arr.sort((a, b) => a - b));

  const result = range.reduce((p, c) => lcm(p, c));

  return result;
}


/* exports */
module.exports = smallestCommons;

console.log(
  smallestCommons([5, 1])
);
