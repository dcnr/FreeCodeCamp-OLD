/*
 * Bonfire: Chunky Monkey
 * http://www.freecodecamp.com/challenges/bonfire-chunky-monkey
 *
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
 *
 */


function chunk(arr, size) {
	var result = [];
	var a = arr.slice(0);

	while (a.length) {
		result.push(a.splice(0, size));
	}

	return result;
}


/* exports */
module.exports = chunk;
