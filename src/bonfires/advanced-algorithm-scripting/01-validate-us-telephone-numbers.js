/* Bonfire: Validate US Telephone Numbers
 * http://www.freecodecamp.com/challenges/bonfire-validate-us-telephone-numbers
 *
 * Return true if the passed string is a valid US phone number
 *
 * The user may fill out the form field any way they choose as long as it
 * is a valid US number. The following are all valid formats for US numbers:
 *
 * 555-555-5555
 *
 * (555)555-5555
 *
 * (555) 555-5555
 *
 * 555 555 5555
 *
 * 5555555555
 *
 * 1 555 555 5555
 *
 * For this challenge you will be presented with a string such as
 * 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or
 * reject the US phone number based on any combination of the formats
 * provided above. The area code is required. If the country code is provided,
 * you must confirm that the country code is 1. Return true if the string is
 * a valid US phone number; otherwise false.
 */


function telephoneCheck(str) {
  'use strict';

  const re = [
    // 555-555-5555
    /^(?:1\s)?(?:\d{3}-){2}\d{4}$/,

    // (555)555-5555
    /^1?[(]\d{3}[)]\d{3}-\d{4}$/,

    // (555) 555-5555
    /^(?:1\s)?[(]\d{3}[)]\s\d{3}-\d{4}$/,

    // 555 555 5555
    /^(?:[\d]{3}\s){2}\d{4}$/,

    // 5555555555
    /^[\d]{10}$/,

    //1 555 555 5555
    /^1\s(?:[\d]{3}\s){2}\d{4}$/
  ];


  for (let i = re.length - 1; i >= 0; --i) {
    if (re[i].test(str)) {
      return true;
    }
  }


  return false;
}


/* exports */
module.exports = telephoneCheck;
