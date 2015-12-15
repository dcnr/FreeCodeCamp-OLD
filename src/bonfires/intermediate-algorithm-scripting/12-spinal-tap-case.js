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
	var re_spaces = new RegExp(/[\s_]/g);
	var re_nospaces = new RegExp(/(.)([A-Z])/g);

	if (~result.indexOf(" ") || ~result.indexOf("_")) {
		result = result.replace(re_spaces, "-");
	}
	else {
		result = result.replace(re_nospaces, "$1-$2");
	}

	result = result.toLowerCase();


	return result;
}


/* exports */
module.exports = spinalCase;
