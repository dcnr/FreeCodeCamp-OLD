/*
 * Bonfire: Where do I belong
 * http://www.freecodecamp.com/challenges/bonfire-where-do-i-belong
 *
 * Return the lowest index at which a value (second argument)
 * should be inserted into an array (first argument) once it has been sorted.
 *
 * For example, where([1,2,3,4], 1.5) should return 1 because it
 * is greater than 1 (index 0), but less than 2 (index 1).
 *
 * Likewise, where([20,3,5], 19) should return 2 because once the
 * array has been sorted it will look like [3,5,20] and 19 is
 * less than 20 (index 2) and greater than 5 (index 1).
 *
 */


function where(arr, num) {
  'use strict';

  const result = Array.prototype.concat(arr, num)
    .sort((a, b) => a - b)
    .indexOf(num);


  return result;
}


/* exports */
module.exports = where;
