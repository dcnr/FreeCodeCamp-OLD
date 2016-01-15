/* Bonfire: No repeats please
 *
 *
 * Return the number of total permutations of the provided string that
 * don't have repeated consecutive letters.
 *
 * For example, 'aab' should return 2 because it has 6 total permutations,
 * but only 2 of them don't have the same letter (in this case 'a') repeating.
 *
 */


function permAlone(str) {
  'use strict';

  let total = 0;
  let n = str.length;
  str = str.split('');


  // Heap's Algorithm by B.R. Heap
  function perm(n, a) {
    function swap(n, i) {
      if (n % 2 === 0) {
        let tmp = a[i];
        a[i] = a[n - 1];
        a[n - 1] = tmp;
      }
      else {
        let tmp = a[0];
        a[0] = a[n - 1];
        a[n - 1] = tmp;
      }
    }


    if (n === 1) {
      lookForDupes(a);
    }
    else {
      for (let i = 0, len = n - 1; i < len; ++i) {
        perm(n - 1, a);

        swap(n, i);
      }

      perm(n - 1, a);
    }
  }


  function lookForDupes(a) {
    const len = a.length;

    for (let i = 0; i < len; ++i) {
      if (a[i] === a[i + 1]) {
        return;
      }
    }

    total++;
  }


  perm(n, str);

  return total;
}


module.exports = permAlone;
