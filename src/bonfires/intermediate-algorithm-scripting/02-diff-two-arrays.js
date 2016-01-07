/* Bonfire: Diff Two Arrays
 * http://www.freecodecamp.com/challenges/bonfire-diff-two-arrays
 *
 * Compare two arrays and return a new array with any items only
 * found in one of the original arrays.
 *
 */


function diff(arr1, arr2) {
  'use strict';

  const newArray = Array.prototype.concat(...arguments)
    .sort();

  let result = [];


  for (let i = 0, len = newArray.length; i < len; i++) {
    const current_item = newArray[i];
    const next_item = newArray[i + 1];

    if (current_item !== next_item) {
      result.push(current_item);
      continue;
    }

    i++;
  }


  return result;
}


/* exports */
module.exports = diff;
