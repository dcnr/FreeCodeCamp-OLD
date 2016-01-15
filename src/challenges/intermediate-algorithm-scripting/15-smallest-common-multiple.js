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
    let range = [];

    for (let step = a[0], max = a[1]; step <= max; ++step) {
      range.push(step);
    }


    return range;
  }

  function gcd(a, b) {
    function step(x, y) {
      return y % x;
    }

    if (a > b) {
      let tmp = b;
      b = a;
      a = tmp;
    }

    let r = a;
    while (true) {
      if (step(a, b) === 0) {
        return r;
      }

      r = step(a, b);
      b = a;
      a = r;
    }
  }

  function lcm(a, b) {
    return a / gcd(a, b) * b;
  }
  /**************************************************/


  arr.sort((a, b) => a - b);

  let result = 0;
  const range = makeRange(arr);

  result = range.reduce((p, c) => lcm(p, c));


  return result;
}


/* exports */
module.exports = smallestCommons;
