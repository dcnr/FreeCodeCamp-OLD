/* Bonfire=> Steamroller
 * http://www.freecodecamp.com/challenges/bonfire-steamroller
 *
 * Flatten a nested array. You must account for varying levels of nesting.
 *
 */


function steamroller(arr) {
  'use strict';

  const result = [];

  /****************** HELPERS ******************/
  function flatten(r, v) {
    if (Array.isArray(v)) {
      r.push(v.toString());
    }
    else {
      r.push(v);
    }

    return r;
  }


  function parse(v) {
    if (typeof v !== 'string') {
      return v;
    }

    if (v.length === 1 && parseInt(v, 10)) {
      return parseInt(v, 10);
    }

    return v;
  }


  function separate(value) {
    if (typeof value !== 'string' || value.length === 1) {
      result.push(value);
    }
    else {
      value
        .split(',')
        .map(v => {
          return parseInt(v, 10);
        })
        .forEach(v => {
          result.push(v);
        });
    }
  }
  /*********************************************/


  arr = arr
    .reduce(flatten, [])
    .filter(v => v)
    .map(parse)
    .forEach(separate);


  return result;
}


/* exports */
module.exports = steamroller;


/* module is directly ran */
if (require.main === module) {
  console.log('Steamroller\n  Flatten nested array.\n');
  console.log(
    "\t[[['a']], [['b']]]\t=>\t", steamroller([[['a']], [['b']]])
  );
  console.log(
    '\t[1, {}, [3, [[4]]]\t=>\t', steamroller([1, {}, [3, [[4]]]])
  );
  console.log(
    '\t[1, [], [3, [[4]]]]\t=>\t', steamroller([1, [], [3, [[4]]]])
  );
  console.log(
    '\t[1, [2], [3, [[4]]]]\t=>\t', steamroller([1, [2], [3, [[4]]]])
  );
}
