/* Bonfire: Where art thou
 * http://www.freecodecamp.com/challenges/bonfire-where-art-thou
 *
 * Make a function that looks through an array of objects (first argument)
 * and returns an array of all objects that have matching property and value
 * pairs (second argument). Each property and value pair of the source object
 * has to be present in the object from the collection if it is to be
 * included in the returned array.
 *
 * For example, if the first argument is
 *
 * [{
 *    first: 'Romeo',
 *    last: 'Montague'
 *  },
 *  {
 *    first: 'Mercutio',
 *    last: null
 *  },
 *  {
 *    first: 'Tybalt',
 *    last: 'Capulet'
 *  }],
 *
 * and the second argument is
 *
 * {
 * last: 'Capulet'
 * }
 *
 * then you must return the third object from the array(the first argument),
 * because it contains the property and it 's value, that was passed on as
 * the second argument.
 *
 */


function where(collection, source) {
  'use strict';

  function compare(obj) {
    const result = Object
      .keys(source)
      .every(prop => {
        if (obj.hasOwnProperty(prop)) {
          if (obj[prop] !== source[prop]) {
            return false; // have prop but does not match
          }

          return true; // all properties matched
        }

        return false; // obj does not have property
      });


    return result;
  }


  const result = collection.filter(compare);


  return result;
}


/* exports */
module.exports = where;
