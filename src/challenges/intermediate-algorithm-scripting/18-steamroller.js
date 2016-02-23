/* Bonfire=> Steamroller
 * http://www.freecodecamp.com/challenges/bonfire-steamroller
 *
 * Flatten a nested array. You must account for varying levels of nesting.
 *
 */

function isArr(v) {
  'use strict';

  return Array.isArray(v) && v.length;
}


function* strip(v) {
  'use strict';

  let tmp;

  while (isArr(v)) {
    tmp = v.shift();

    if (isArr(tmp)) {
      if (tmp.length === 1 && !isArr(tmp[0])) {
        yield tmp[0];
        continue;
      }

      v = tmp;
      continue;
    }

    yield tmp;
  }

}


function steamroller(arr) {
  'use strict';

  const result = arr.reduce((acc, v) => {
    if (isArr(v)) {
      for (let val of strip(v)) {
        acc.push(val);
      }

      return acc;
    }

    if (Array.isArray(v) && v.length === 0) {
      return acc;
    }

    acc.push(v);
    return acc;
  }, []);

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
