/* Bonfire: DNA Pairing
 * http://www.freecodecamp.com/challenges/bonfire-dna-pairing
 *
 * The DNA strand is missing the pairing element. Take each character,
 * get its pair, and return the results as a 2d array.
 *
 * Base pairs are a pair of AT and CG. Match the missing element to the
 * provided character.
 *
 * Return the provided character as the first element in each array.
 *
 * For example, for the input GCG,
 * return [["G", "C"], ["C","G"],["G", "C"]]
 *
 * The character and its pair are paired up in an array, and all the
 * arrays are grouped into one encapsulating array.
 *
 */


function pair(str) {
  'use strict';

  var pairs = {
    "A": "T",
    "C": "G",

    getPair: function (base) {
      for (let key in this) {
        if (key === base) {
          return this[key];
        }

        if (this[key] === base) {
          return key;
        }
      }
    } // end getPair
  };


  var result = [];
  var sequence = str.split("");

  result = sequence.map(base => [base, pairs.getPair(base)]);

  return result;
}


/* exports */
module.exports = pair;
