/* Bonfire: Symmetric Difference
 * Create a function that takes two or more arrays and returns an array of
 * the symmetric difference of the provided arrays.
 *
 * The mathematical term symmetric difference refers to the elements in two
 * sets that are in either the first or second set, but not in both.
 */


function sym(args) {
  'use strict';

  args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);

  function diff(a, b) {
    return a.filter(v => !~b.indexOf(v));
  }

  return args.reduce((p, c) => {
    return []
      .concat(diff(p, c), diff(c, p))
      .filter((v, pos, arr) => arr.indexOf(v) === pos);
  });
}


/* exports */
module.exports = sym;


/* module ran directly */
if (require.main === module) {
  console.log(
    `
Symmetric Difference\n
  Return the symmetric difference of the given
  arrays.\n`
  );

  console.log(
    '[1, 2, 3], [5, 2, 1, 4]\t\t\t\t\t=>\t', sym([1, 2, 3], [5, 2, 1, 4])
  );

  console.log(
    '[1, 2, 5], [2, 3, 5], [3, 4, 5]\t\t\t\t=>\t',
    sym([1, 2, 5], [2, 3, 5], [3, 4, 5])
  );

  console.log(
    '[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]\t\t=>\t',
    sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
  );

  console.log(
    '[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]\t=>\t',
    sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
  );
}
