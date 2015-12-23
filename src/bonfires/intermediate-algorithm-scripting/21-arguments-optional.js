/* Bonfire: Arguments Optional
 * http://www.freecodecamp.com/challenges/bonfire-arguments-optional
 *
 * Create a function that sums two arguments together. If only one
 * argument is provided, then return a function that expects one argument
 * and returns the sum.
 *
 * For example, add(2, 3) should return 5, and add(2) should return
 * a function.
 *
 * Calling this returned function with a single argument will then
 * return the sum:
 *
 * var sumTwoAnd = add(2);
 *
 * sumTwoAnd(3) returns 5.
 *
 * If either argument isn't a valid number, return undefined.
 *
 */


function add() {
  'use strict';
  var result = 0;

  if (arguments.length > 1) {
    for (let i = 0, len = arguments.length; i < len; ++i) {
      if (typeof arguments[i] !== "number")
        return undefined;

      result += arguments[i];
    }

    return result;
  }

  if (typeof arguments[0] !== "number")
    return undefined;


  let y = arguments[0];
  result = function(x) {
    if (typeof x !== "number")
      return undefined;

    return x + y;
  };

  return result;
}


/* exports */
module.exports = add;
