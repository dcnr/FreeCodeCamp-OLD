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

	var sequence = [];
	var result = '';

	for (let i = 0, len = str.length; i < len; ++i) {
		sequence.push(str.charCodeAt(i));
	}

	for (let i = 0, len = sequence.length; i < len; ++i) {
		if (sequence[i] + 1 != sequence[i + 1] && // check if next is sequential
			i + 1 < len) { // check for out of bounds
			result = String.fromCharCode(sequence[i] + 1);
			break;
		}
		else {
			result = undefined;
		}
	}

	return result;
}


/* exports */
module.exports = fearNotLetter;
