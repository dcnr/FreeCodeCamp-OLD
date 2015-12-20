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

	function checkPair(current_value, current_index) {
		for (let i = current_index + 1; i < array_length; ++i) {
			const paired_value = arr[i];
			const paired_index = i;

			if (current_value + paired_value === arg) {
				indices.push(current_index, paired_index);
				delete arr[current_index];
				delete arr[paired_index];
				break;
			}
		}
	}


	arr = arr.slice();
	const array_length = arr.length;

	if (!array_length) {
		return 0;
	}

	let indices = [];

	for (let i = 0; i < array_length; ++i) {
		const current_value = arr[i];
		const current_index = i;

		checkPair(current_value, current_index);
	}

	const result = indices.reduce((a, b) => a + b);
	return result;
}


module.exports = pairwise;
