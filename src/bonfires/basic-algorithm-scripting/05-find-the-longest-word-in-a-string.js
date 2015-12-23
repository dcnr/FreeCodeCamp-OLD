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
  var longestWord = 0;

  str.split(' ').forEach(cv => {
    if (cv.length > longestWord)
      longestWord = cv.length;
  });

  return longestWord;
}


/* exports */
module.exports = findLongestWord;
