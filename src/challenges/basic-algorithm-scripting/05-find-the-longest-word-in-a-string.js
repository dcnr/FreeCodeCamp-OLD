/*
 * Bonfire: Find the Longest Word in a String
 * http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string
 *
 * Return the length of the longest word in the provided sentence.
 *
 * Your response should be a number.
 *
 */


function findLongestWord(str) {
  'use strict';

  const longest_word_length = str
    .split(' ')
    .reduce((curr_longest, word) =>
      word.length > curr_longest
        ? word.length
        : curr_longest
    , 0);

  return longest_word_length;
}


/* exports */
module.exports = findLongestWord;
