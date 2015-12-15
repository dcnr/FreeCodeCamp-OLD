/* Bonfire: Spinal Tap Case
 * http://www.freecodecamp.com/challenges/bonfire-spinal-tap-case
 *
 * Convert a string to spinal case. Spinal case is
 * all-lowercase-words-joined-by-dashes.
 *
 */


function spinalCase(str) {
	'use strict';

	var result = str;

	if (~result.indexOf(" ") || ~result.indexOf("_")) {
		result = result.replace(/[\s_]/g, "-");
	}
	else {
		result = result.replace(/(.)([A-Z])/g, "$1-$2");
	}

	result = result.toLowerCase();
	return result;
}


/* exports */
module.exports = spinalCase;
