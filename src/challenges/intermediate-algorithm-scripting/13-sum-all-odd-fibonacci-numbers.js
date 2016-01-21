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

function* fib() {
  'use strict';

  let prev = 0;
  let curr = 1;

  yield curr;

  while (true) {
    let tmp = prev;
    prev = curr;
    curr = tmp + prev;
    yield curr;
  }
}


function sumFibs(num) {
  'use strict';

  if (num === 1) {
    return 1;
  }


  let result = 0;

  for (let n of fib()) {
    if (n > num) {
      break;
    }

    if (n % 2 === 1) {
      result = result + n;
    }
  }
  

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
