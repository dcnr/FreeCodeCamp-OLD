/* Bonfire: Steamroller
 * http://www.freecodecamp.com/challenges/bonfire-steamroller
 *
 * Flatten a nested array. You must account for varying levels of nesting.
 *
 */


function steamroller(arr) {
	'use strict';

	// function process(v) {
	//
	// }

	var clone = arr.slice(0);
	var result = [];

	clone.forEach(v => {

		if (v instanceof Array) {
			let tmp;

			while (v instanceof Array && v.length) {
				tmp = v.shift();

				if (tmp instanceof Array) {
					if (tmp.length === 1 && !(tmp[0] instanceof Array)) {
						result.push(tmp[0]);
						break;
					}

					v = tmp;
				} else {
					result.push(tmp);
				}
			}

		}
		else {
			result.push(v);
		}
	});

	// for (let i = 0, len = clone.length; i < len; ++i) {
	//
	// }

	return result;
}


/* exports */
module.exports = steamroller;
