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

  const alphabet = Array
    .apply(null, new Array(26))
    .map((v, i) => String.fromCharCode(i + 65));


  /* jshint -W014 */
  const decodedStr = encodedStr
    .split('')
    .map(char =>
      !~alphabet.indexOf(char)
        ? char
        : alphabet[(alphabet.indexOf(char) + 13) % 26])
    .join('');


  return decodedStr;
}


/* exports */
module.exports = rot13;


/* module ran directly */
if (require.main === module) {
  console.log(
    `
Caesar's Cipher\n
  Return the decoded ROT13 encrypted string.\n`
  );

  console.log(
    '\tSERR PBQR PNZC\t\t=>\t', rot13('SERR PBQR PNZC')
  );

  console.log(
    '\tSERR CVMMN!\t\t=>\t', rot13('SERR CVMMN!')
  );

  console.log(
    '\tGUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.\n\t=>\t',
    rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.')
  );
}
