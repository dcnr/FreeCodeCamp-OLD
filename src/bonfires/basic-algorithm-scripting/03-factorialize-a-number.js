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


function factorialize(num, acc) {
  'use strict';

  acc = acc || 1;


  if (1 === num || 0 === num) {
    return acc;
  }


  return factorialize(num - 1, acc * num);
}


/* exports */
module.exports = factorialize;
