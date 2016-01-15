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

  const roman_numerals = [
    ['', 'M', 'MM', 'MMM'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  ];


  let digits = num
    .toString()
    .split('');

  while (digits.length < 4) {
    digits.unshift('0');
  }

  const converted = digits
    .map((d, i) => roman_numerals[i][parseInt(d, 10)])
    .join('');


  return converted;
}


/* exports */
module.exports = convert;


/* module ran directly */
if (require.main === module) {
  console.log(
    `
Roman Numeral Converter\n
  Convert a given number into a Roman Numeral\n`
  );

  console.log(
    '\t5\t=>\t', convert(5)
  );

  console.log(
    '\t9\t=>\t', convert(9)
  );

  console.log(
    '\t12\t=>\t', convert(12)
  );

  console.log(
    '\t16\t=>\t', convert(16)
  );

  console.log(
    '\t29\t=>\t', convert(29)
  );

  console.log(
    '\t44\t=>\t', convert(44)
  );

  console.log(
    '\t45\t=>\t', convert(45)
  );

  console.log(
    '\t68\t=>\t', convert(68)
  );

  console.log(
    '\t83\t=>\t', convert(83)
  );

  console.log(
    '\t97\t=>\t', convert(97)
  );

  console.log(
    '\t99\t=>\t', convert(99)
  );

  console.log(
    '\t500\t=>\t', convert(500)
  );

  console.log(
    '\t501\t=>\t', convert(501)
  );

  console.log(
    '\t649\t=>\t', convert(649)
  );

  console.log(
    '\t798\t=>\t', convert(798)
  );

  console.log(
    '\t891\t=>\t', convert(891)
  );

  console.log(
    '\t1000\t=>\t', convert(1000)
  );

  console.log(
    '\t1004\t=>\t', convert(1004)
  );

  console.log(
    '\t1006\t=>\t', convert(1006)
  );

  console.log(
    '\t1023\t=>\t', convert(1023)
  );

  console.log(
    '\t2014\t=>\t', convert(2014)
  );

  console.log(
    '\t3999\t=>\t', convert(3999)
  );
}
