/* Bonfire: Missing letters
 * http://www.freecodecamp.com/challenges/bonfire-missing-letters
 *
 * Find the missing letter in the passed letter range and return it.
 *
 * If all letters are present in the range, return undefined.
 *
 */


function fearNotLetter(str) {
  'use strict';

  let result;
  let sequence = str
    .split('')
    .map(char => char.charCodeAt());


  for (let i = 0, len = sequence.length; i < len; ++i) {
    const next_char = sequence[i + 1] || 'out of bounds';
    const supposed_next_char = sequence[i] + 1;

    if (next_char !== supposed_next_char && next_char !== 'out of bounds') {
      result = String.fromCharCode(supposed_next_char);
      break;
    }
  }


  return result;
}


/* exports */
module.exports = fearNotLetter;
