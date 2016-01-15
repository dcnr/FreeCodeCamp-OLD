/* Bonfire: Sum All Primes
 * http://www.freecodecamp.com/challenges/bonfire-sum-all-primes
 *
 * Sum all the prime numbers up to and including the provided number.
 *
 * A prime number is defined as having only two divisors, 1 and itself.
 * For example, 2 is a prime number because it's only divisible by 1 and 2.
 * 1 isn't a prime number, because it's only divisible by itself.
 *
 * The provided number may not be a prime.
 *
 */


function sumPrimes(num) {
  'use strict';

  function checkPrime(n) {
    //
    // IN THIS FUNCTION:
    // HORRIBLE TRIAL DIVISION
    //

    let max = Math.sqrt(n);

    for (let i = 2; i <= max; ++i) {
      let x = n / i;

      if (parseInt(x, 10) === x) {
        return false;
      }
    }

    return true;
  }

  let result = 0;

  for (let i = 2; i <= num; ++i) {
    if (checkPrime(i)) {
      result += i;
    }
  }


  return result;
}


/* exports */
module.exports = sumPrimes;
