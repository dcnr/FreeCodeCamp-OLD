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

   const longest_word = str.split(" ")
      .reduce((curr_longest, word) => {
         if (word.length > curr_longest) {
            return word.length;
         }

         return curr_longest;
      }, 0);

   return longest_word;
}


/* exports */
module.exports = findLongestWord;
