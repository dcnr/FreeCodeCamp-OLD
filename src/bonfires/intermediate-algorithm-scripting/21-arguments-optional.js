/* Bonfire: Arguments Optional
 * http://www.freecodecamp.com/challenges/bonfire-arguments-optional
 *
 * Create a function that sums two arguments together. If only one
 * argument is provided, then return a function that expects one argument
 * and returns the sum.
 *
 * For example, add(2, 3) should return 5, and add(2) should return
 * a function.
 *
 * Calling this returned function with a single argument will then
 * return the sum:
 *
 * var sumTwoAnd = add(2);
 *
 * sumTwoAnd(3) returns 5.
 *
 * If either argument isn't a valid number, return undefined.
 */


function isNum(v) {
  'use strict';

  return typeof v === 'number';
}


function add() {
  'use strict';

  const len = arguments.length;
  const args = Array.apply(null, new Array(len));
  for (let i = 0; i < len; ++i) {
    args[i] = arguments[i];
  }


  if (args.length === 1 && isNum(args[0])) {
    /* jshint -W014 */
    return function (y) {
      const result = args[0] + y;

      return isNum(result) && isNum(y)
        ? result
        : undefined;
    };
  }


  const result = args[0] + args[1];
  return isNum(result)
    ? result
    : undefined;
}


/* exports */
module.exports = add;


/* module is ran directly */
if (require.main === module) {
  console.log(
    `
Arguments Optional

  Sum two arguments together.
  If an argument is not a number, return undefined.
  If only one argument is supplied, return a function
    that expects an argument and return the sum.\n`
  );

  console.log(
    '\tadd(2, 3)\t\t\t=>\t', add(2, 3)
  );

  console.log(
    "\tadd('http://bit.ly/IqT6zt')\t=>\t", add('http://bit.ly/IqT6zt')
  );

  console.log(
    "\tadd(2, '3')\t\t\t=>\t", add(2, '3')
  );

  console.log(
    '\tadd(2)([3])\t\t\t=>\t', add(2)([3])
  );

  console.log(
    '\tadd(2)(3)\t\t\t=>\t', add(2)(3)
  );
}
