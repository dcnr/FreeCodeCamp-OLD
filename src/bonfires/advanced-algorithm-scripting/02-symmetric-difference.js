/* Bonfire: Symmetric Difference
 * Create a function that takes two or more arrays and returns an array of
 * the symmetric difference of the provided arrays.
 *
 * The mathematical term symmetric difference refers to the elements in two
 * sets that are in either the first or second set, but not in both.
 *
 */


function sym(args) {
	'use strict';

	function removeDupes(arr) {
		arr.sort((a, b) => a - b);
		let unique = [];

		for (let i = 0, len = arr.length; i < len; ++i) {
			const cv = arr[i];

			if (!~unique.indexOf(cv)) {
				unique.push(cv);
			}
		}

		return unique.filter(v => v);
	}

	function diff(a, b) {
		let set = {};
		a = removeDupes(a);
		b = removeDupes(b);
		const ab = a.concat(b);

		for (let i = 0, len = ab.length; i < len; ++i) {
			let cv = ab[i];

			if (!set.hasOwnProperty(cv)) {
				set[cv] = 1;
			}
			else {
				set[cv]++;
			}
		}

		return Object.keys(set)
			.filter(ck => {
				if (set[ck] === 1)
					return true;
			})
			.map(cv => parseInt(cv, 10));
	}


	args = [];
	for (let i = 0, len = arguments.length; i < len; ++i) {
		args.push(arguments[i]);
	}

	const result = args.reduce((prev_arr, curr_arr) => {
		return diff(prev_arr, curr_arr);
	});


	return result;
}


module.exports = sym;
