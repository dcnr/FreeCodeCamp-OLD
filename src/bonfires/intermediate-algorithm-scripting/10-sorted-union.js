/* Bonfire: Sorted Union
 * http://www.freecodecamp.com/challenges/bonfire-sorted-union
 *
 * Write a function that takes two or more arrays and returns a
 * new array of unique values in the order of the original provided arrays.
 *
 * In other words, all values present from all arrays should be included
 * in their original order, but with no duplicates in the final array.
 *
 * The unique numbers should be sorted by their original order, but the
 * final array should not be sorted in numerical order.
 *
 */


function unite(arr1, arr2, arr3) {
	'use strict';

	var result = [];
	var set = Array.prototype.concat(...arguments);

	for (let i = 0, len = set.length; i < len; ++i) {
		while (~set.indexOf(set[i], i + 1)) {
			let loc = set.indexOf(set[i], i + 1);
			delete set[loc];
		}
	}

	result = set.filter(v => v !== '');

	return result;
}


/* exports */
module.exports = unite;
