/*
 * Bonfire: Truncate a string
 * http://www.freecodecamp.com/challenges/bonfire-truncate-a-string
 *
 * Truncate a string (first argument) if it is longer than the given
 * maximum string length (second argument).
 * Return the truncated string with a "..." ending.
 *
 * Note that the three dots at the end add to the string length.
 *
 * If the num is less than or equal to 3, then the length of the
 * three dots is not added to the string length.
 *
 */


function truncate(str, num) {
  if (num >= str.length)
    return str;

  return str.slice(0, (
    (num <= 3) ? num : num - 3
  )) + "...";
}


/* exports */
module.exports = truncate;
