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
  return arr.filter(
    val => Boolean(val)
  );
}


/* exports */
module.exports = bouncer;
