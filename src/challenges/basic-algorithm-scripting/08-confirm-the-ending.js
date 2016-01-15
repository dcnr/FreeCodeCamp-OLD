/*
 * Bonfire: Confirm the Ending
 * http://www.freecodecamp.com/challenges/bonfire-confirm-the-ending
 *
 * Check if a string (first argument) ends with the given target string
 * (second argument).
 *
 */


function end(str, target) {
  'use strict';

  return str.slice(-target.length) === target;
}


/* exports */
module.exports = end;
