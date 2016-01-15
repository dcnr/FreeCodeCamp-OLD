/* Bonfire: Drop it
 * http://www.freecodecamp.com/challenges/bonfire-drop-it
 *
 * Drop the elements of an array (first argument), starting
 * from the front, until the predicate (second argument) returns true.
 *
 */


function drop(arr, func) {
  'use strict';

  let result = [];
  const index = arr.findIndex(v => func(v));


  if (~index) {
    result = arr.slice(index);
  }


  return result;
}


/* exports */
module.exports = drop;
