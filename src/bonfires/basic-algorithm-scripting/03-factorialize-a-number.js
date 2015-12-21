/*
 * Bonfire: Factorialize a Number
 * http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number
 *
 * Return the factorial of the provided integer.
 *
 * If the integer is represented with the letter n, a factorial is the
 * product of all positive integers less than or equal to n.
 *
 * Factorials are often represented with the shorthand notation n!
 *
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 *
 */


function factorialize(num) {
	if (1 === num || 0 === num) {
		return 1;
	}

	return num * factorialize(num - 1);
}


/* exports */
module.exports = factorialize;
