/* Bonfire: Diff Two Arrays
 * http://www.freecodecamp.com/challenges/bonfire-diff-two-arrays
 *
 * Compare two arrays and return a new array with any items only
 * found in one of the original arrays.
 *
 */


function diff(arr1, arr2) {
  'use strict';
  var newArray = Array.prototype.concat(...arguments)
    .sort();

  var result = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i + 1] !== newArray[i])
      result.push(newArray[i]);
    else
      i++;
  }

  return result;
}


/* exports */
module.exports = diff;
