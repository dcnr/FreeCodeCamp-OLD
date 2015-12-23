/*
 * Bonfire: Slasher Flick
 * http://www.freecodecamp.com/challenges/bonfire-slasher-flick
 *
 * Return the remaining elements of an array after chopping
 * off n elements from the head.
 *
 * The head meaning the beginning of the array, or the zeroth index
 *
 */


function slasher(arr, howMany) {
  return arr.slice(howMany);
}


/* exports */
module.exports = slasher;
