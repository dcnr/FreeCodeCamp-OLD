/*
 * Bonfire: Sum All Numbers in a Range
 * http://www.freecodecamp.com/challenges/bonfire-sum-all-numbers-in-a-range
 *
 * We'll pass you an array of two numbers. Return the sum of those two
 * numbers and all numbers between them.
 *
 * The lowest number will not always come first.
 *
 */


function sumAll(arr) {
	var input = arr.slice(0);

	input.sort((a, b) => a - b);
	var result = input[0];

	while (input[1] > input[0]) {
		result += input[1];
		input[1]--;
	}

	return result;
}

/* exports */
module.exports = sumAll;
