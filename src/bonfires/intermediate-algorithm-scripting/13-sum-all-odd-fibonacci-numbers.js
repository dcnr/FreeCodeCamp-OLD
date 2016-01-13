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

function fib(max, acc) {
  'use strict';

  acc = acc || [1, 1];
  const last = acc.length - 1;

  if (acc[last] > max) {
    acc.pop();
    return acc;
  }

  acc.push(acc[last - 1] + acc[last]);

  return fib(max, acc);
}


function sumFibs(num) {
  'use strict';

  if (num === 1) {
    return 1;
  }

  if (num < 1) {
    return 0;
  }


  const result = fib(num)
    .reduce((p, c) => {
      if (c % 2 !== 0) {
        return p + c;
      }

      return p;
    });


  return result;
}


/* exports */
module.exports = sumFibs;


/* module ran directly */
if (require.main === module) {
  console.log(
    `
Sum All Odd Fibonacci Numbers\n
  Return the sum of all odd Fibonacci numbers up to
  and including the given number if it is a part of
  the sequence.\n`
  );

  console.log(
    '\tsumFibs(1)\t\t=>\t', sumFibs(1)
  );

  console.log(
    '\tsumFibs(1000)\t\t=>\t', sumFibs(1000)
  );

  console.log(
    '\tsumFibs(4000000)\t=>\t', sumFibs(4000000)
  );

  console.log(
    '\tsumFibs(4)\t\t=>\t', sumFibs(4)
  );

  console.log(
    '\tsumFibs(75024)\t\t=>\t', sumFibs(75024)
  );

  console.log(
    '\tsumFibs(75025)\t\t=>\t', sumFibs(75025)
  );
}
