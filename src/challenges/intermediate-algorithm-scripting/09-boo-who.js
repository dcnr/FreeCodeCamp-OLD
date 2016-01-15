/* Bonfire: Boo who
 * http://www.freecodecamp.com/challenges/bonfire-boo-who
 *
 * Check if a value is classified as a boolean primitive.
 * Return true or false.
 *
 * Boolean primitives are true and false.
 *
 */


function boo(bool) {
  'use strict';

  return bool === true || bool === false;
}


/* exports */
module.exports = boo;
