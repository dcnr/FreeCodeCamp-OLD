/* Bonfire: Roman Numeral Converter
 * http://www.freecodecamp.com/challenges/bonfire-roman-numeral-converter
 *
 * Convert the given number into a roman numeral.
 *
 * All roman numerals answers should be provided in upper-case.
 *
 */


function convert(num) {
	'use strict';

	if (num === 0)
		return "nulla";

	if (num >= 4000)
		return `Sorry, currently the converter
			cannot deal with that number range.`;

	var roman_numerals = [
		["", "M", "MM", "MMM"],
		["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
		["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
		["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
	];

	var digits = num.toString();
	while (digits.length < 4) {
		digits = "0" + digits;
	}

	var converted_numeral = digits.split("")
		.map(digit => parseInt(digit))
		.map((digit, index) => roman_numerals[index][digit])
		.join("");

	return converted_numeral;
}


/* exports */
module.exports = convert;
