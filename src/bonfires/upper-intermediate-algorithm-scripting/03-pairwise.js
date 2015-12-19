/* Bonfire: Pairwise
 * http://www.freecodecamp.com/challenges/bonfire-pairwise
 *
 * Return the sum of all indices of elements of 'arr' that can be paired
 * with one other element to form a sum that equals the value in the
 * second argument 'arg'. If multiple sums are possible, return the smallest
 * sum. Once an element has been used, it cannot be reused to pair with
 * another.
 *
 * For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because
 * 4, 2, 3 and 5 can be paired with each other to equal 7.
 *
 * pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first
 * two elements can be paired to equal 4, and the first element has an
 * index of 0!
 *
 */


function pairwise(arr, arg) {
	'use strict';

	if (!arr.length)
	return 0;

	let result = [];

	for (let i = 0, len = arr.length; i < len - 1; ++i) {
		if (~result.indexOf(i))
			continue;

			let cv = arr[i];
			let tmp = [];
			for (let j = i + 1; j < len; ++j) {
				if (~result.indexOf(j))
					continue;

					let pv = arr[j];

					if(cv + pv === arg) {
						if (!~result.indexOf(cv))
							result.push(i);

						tmp.push(j);
					}
			}
			tmp.sort((a, b) => a - b);
			if (tmp.length)
				result.push(tmp[0]);
	}

	if (result.length)
		result = result.reduce((a, b) => a + b);

	return result;
}


module.exports = pairwise;
