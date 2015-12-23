/* Bonfire: Binary Agents
 * http://www.freecodecamp.com/challenges/bonfire-binary-agents
 *
 * Return an English translated sentence of the passed binary string.
 *
 * The binary string will be space separated.
 *
 */


function binaryAgent(str) {

  return str.split(" ")
    .map(v =>
      String.fromCharCode(
        parseInt(v, 2)
      )
    )
    .join("");
}


/* exports */
module.exports = binaryAgent;
