/* Bonfire: Caesars Cipher
 * One of the simplest and most widely known ciphers is a Caesar cipher,
 * also known as a shift cipher. In a shift cipher the meanings of the letters
 * are shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values of the letters
 * are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 *
 * Write a function which takes a ROT13 encoded string as input and returns a
 * decoded string. All letters will be uppercase. Do not transform any
 * non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 *
 * The provided code transforms the input into an array for you, codeArr.
 * Place the decoded values into the decodedArr array where the provided code
 * will transform it back into a string.
 */


function rot13(encodedStr) {
  'use strict';

  let codeArr = encodedStr.split(""); // String to Array
  let decodedArr = []; // Your Result goes here
  // Only change code below this line

  decodedArr = codeArr.map(char => {
    let charCode = String.prototype.charCodeAt.call(char);

    if (charCode < 65 || charCode > 90) {
      return char;
    }

    if (charCode + 13 > 90) {
      return String.fromCharCode(charCode - 13);
    }

    return String.fromCharCode(charCode + 13);
  });

  // Only change code above this line
  return decodedArr.join(""); // Array to String
}


if (require.main === module) {
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));
}


module.exports = rot13;
