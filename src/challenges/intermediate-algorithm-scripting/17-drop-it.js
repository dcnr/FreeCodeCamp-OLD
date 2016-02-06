/* Bonfire: Drop it
 * http://www.freecodecamp.com/challenges/bonfire-drop-it
 *
 * Drop the elements of an array (first argument), starting
 * from the front, until the predicate (second argument) returns true.
 *
 */


function drop(arr, func) {
  'use strict';

  const index = arr.findIndex(func);
  return index >= 0
    ? arr.slice(index)
    : [];
}


/* exports */
module.exports = drop;
