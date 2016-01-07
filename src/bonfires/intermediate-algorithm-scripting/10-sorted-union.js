/* Bonfire: Sorted Union
 * http://www.freecodecamp.com/challenges/bonfire-sorted-union
 *
 * Write a function that takes two or more arrays and returns a
 * new array of unique values in the order of the original provided arrays.
 *
 * In other words, all values present from all arrays should be included
 * in their original order, but with no duplicates in the final array.
 *
 * The unique numbers should be sorted by their original order, but the
 * final array should not be sorted in numerical order.
 *
 */


function unite(arr1, arr2, arr3) {
  'use strict';

  const set = Array.prototype.concat(...arguments);

  const result = set.filter((num, index) => {
    while (~set.indexOf(num, index) && num !== undefined) {
      const loc = set.indexOf(num, index);
      delete set[loc];
    }

    return true;
  });


  return result;
}


/* exports */
module.exports = unite;
