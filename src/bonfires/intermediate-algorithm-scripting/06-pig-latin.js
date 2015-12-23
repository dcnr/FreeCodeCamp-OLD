/* Bonfire: Pig Latin
 * http://www.freecodecamp.com/challenges/bonfire-pig-latin
 *
 * Translate the provided string to pig latin.
 *
 * Pig Latin takes the first consonant (or consonant cluster) of an
 * English word, moves it to the end of the word and suffixes an "ay".
 *
 * If a word begins with a vowel you just add "way" to the end.
 *
 */


function translate(str) {
  var result = "";
  var re = new RegExp("^([^aeiou]+)", "i");

  if (re.test(str)) {
    result = str.split(re)
      .reverse()
      .join("");

    result += "ay";
  }
  else {
    result = str + "way";
  }

  return result;
}


/* exports */
module.exports = translate;
