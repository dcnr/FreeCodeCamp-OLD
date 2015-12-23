/* Bonfire: Finders Keepers
 * http://www.freecodecamp.com/challenges/bonfire-finders-keepers
 *
 * Create a function that looks through an array (first argument)
 * and returns the first element in the array that passes a truth
 * test (second argument).
 *
 */


function find(arr, func) {
  var num = 0;

  num = arr.find(v => func(v));

  return num;
}


/* exports */
module.exports = find;
