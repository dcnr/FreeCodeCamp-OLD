/* Bonfire: Sum All Odd Fibonacci Numbers
 * http://www.freecodecamp.com/challenges/bonfire-sum-all-odd-fibonacci-numbers
 *
 * Return the sum of all odd Fibonacci numbers up to and including
 * the passed number if it is a Fibonacci number.
 *
 * The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8,
 * and each subsequent number is the sum of the previous two numbers.
 *
 * As an example, passing 4 to the function should return 5 because all
 * the odd Fibonacci numbers under 4 are 1, 1, and 3.
 *
 */


function sumFibs(num) {
  'use strict';

  if (num === 1) return 1;
  if (num < 1) return 0;

  var result = 0;
  var fib_seq = [1];

  for (let p = 0, c = 1, r = 1; r <= num; r = p + c) {
    p = c;
    c = r;
    fib_seq.push(r);
  }

  result = fib_seq.reduce((p, c) => {
    if (c % 2 !== 0) {
      return p + c;
    }

    return p + 0;
  });

  return result;
}


/* exports */
module.exports = sumFibs;
