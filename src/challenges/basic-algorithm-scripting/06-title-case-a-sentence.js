/*
 * Bonfire: Title Case a Sentence
 * http://www.freecodecamp.com/challenges/bonfire-title-case-a-sentence
 *
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 *
 * For the purpose of this exercise, you should also capitalize connecting
 * words like "the" and "of".
 *
 */


function titleCase(str) {
  'use strict';

  str = str
    .toLowerCase()
    .split(' ')
    .map(val => val
      .charAt(0)
      .toUpperCase() + val.slice(1)
    )
    .join(' ');


  return str;
}


/* exports */
module.exports = titleCase;
