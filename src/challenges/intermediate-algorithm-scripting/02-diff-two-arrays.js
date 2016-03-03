/* Bonfire: Diff Two Arrays
 * http://www.freecodecamp.com/challenges/bonfire-diff-two-arrays
 *
 * Compare two arrays and return a new array with any items only
 * found in one of the original arrays.
 *
 */


function diff(arr1, arr2) {
  'use strict';

  return Array.prototype
    .concat(
      arr1.filter(v => !~arr2.indexOf(v)),
      arr2.filter(v => !~arr1.indexOf(v))
    );
}


/* exports */
module.exports = diff;
