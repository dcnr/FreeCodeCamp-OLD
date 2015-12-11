/*
 * Bonfire: Seek and Destroy
 * http://www.freecodecamp.com/challenges/bonfire-seek-and-destroy
 *
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 *
 */


function destroyer(arr) {
	// I don't know why but if I don't do this
	// assignment it won't pass the FCC checks
	// but it works fine locally in node
	var args = arguments;

	return arr.filter(val => {
		for (var i = 1; i < args.length; i++) {
			if (val === args[i])
				return false;
		}

		return true;
	});
}


/* exports */
module.exports = destroyer;
