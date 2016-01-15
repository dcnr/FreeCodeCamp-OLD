/* Bonfire: Spinal Tap Case
 * http://www.freecodecamp.com/challenges/bonfire-spinal-tap-case
 *
 * Convert a string to spinal case. Spinal case is
 * all-lowercase-words-joined-by-dashes.
 *
 */


function spinalCase(str) {
  'use strict';

  return str
    .replace(/[_ ]|([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}


/* exports */
module.exports = spinalCase;
