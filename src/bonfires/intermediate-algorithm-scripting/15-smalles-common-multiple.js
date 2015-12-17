/* Bonfire: Smallest Common Multiple
 * http://www.freecodecamp.com/challenges/bonfire-smallest-common-multiple
 *
 * Find the smallest common multiple of the provided parameters that
 * can be evenly divided by both, as well as by all sequential numbers
 * in the range between these parameters.
 *
 * The range will be an array of two numbers that will not necessarily
 * be in numerical order.
 *
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3
 * that is evenly divisible by all numbers between 1 and 3.
 *
 */


function smallestCommons(arr) {
	'use strict';

	/********************* HELPERS ********************/
	function makeRange(a) {
		let range = [];

		for (let step = a[0], max = a[1]; step <= max; ++step) {
			range.push(step);
		}

		return range;
	}

	function gcd(a, b) {
		let result = 0;
		let r = 1, tmp = 1;

		while (true) {
			tmp = r;
			r = b % a;

			if (r === 0) {
				result = tmp;
				break;
			}
			else {
				b = a;
				a = r;
			}
		}

		return result;
	}
	/**************************************************/


	arr.sort((a, b) => a - b);

	var result = 0;
	//var range = makeRange(arr);

	result = gcd(...arr);

	return result;
}

console.log(smallestCommons([125, 350]));

/* exports */
module.exports = smallestCommons;
