/*
 * Bonfire: Falsy Bouncer
 * http://www.freecodecamp.com/challenges/bonfire-falsy-bouncer
 *
 * Remove all falsy values from an array.
 *
 * Falsy values in javascript are false, null, 0, "", undefined, and NaN.
 *
 */


function bouncer(arr) {
  'use strict';

  return arr.filter(v => v);
}


/* exports */
module.exports = bouncer;
