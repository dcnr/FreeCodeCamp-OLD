/* Bonfire: Convert HTML Entities
 * http://www.freecodecamp.com/challenges/bonfire-convert-html-entities
 *
 * Convert the characters
 * '&', '<', '>', ''' (double quote), and ''' (apostrophe),
 * in a string to their corresponding HTML entities.
 *
 */


function convert(str) {
  'use strict';

  const ENTITIES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  const pattern = new RegExp("[&<>\"']", 'g');
  const result = str.replace(pattern, (match) => ENTITIES[match]);


  return result;
}


/* exports */
module.exports = convert;
