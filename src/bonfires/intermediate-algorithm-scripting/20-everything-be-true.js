/* Bonfire: Everything Be True
 * http://www.freecodecamp.com/challenges/bonfire-everything-be-true
 *
 * Check if the predicate (second argument) is truthy on all elements
 * of a collection (first argument).
 *
 */


function every(collection, pre) {
	var result = true;

	result = collection.every(v => {
		if (v.hasOwnProperty(pre)) {
			return Boolean(v[pre]);
		}

		return false;
	});

	return result;
}


/* exports */
module.exports = every;
