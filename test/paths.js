function setPath(type, filelist) {
   'use strict';

   const basic = './bonfires/basic-algorithm-scripting/';
   const intermediate = './bonfires/intermediate-algorithm-scripting/';
   const upper = './bonfires/upper-intermediate-algorithm-scripting/';
   const advanced = './bonfires/advanced-algorithm-scripting/';

   /********************** FILE LIST **********************/
   const basic_suite = [
      '',
      require(basic + '02-reverse-a-string-spec'),
      require(basic + '03-factorialize-a-number-spec'),
      require(basic + '04-check-for-palindromes-spec'),
      require(basic + '05-find-the-longest-word-in-a-string-spec'),
      require(basic + '06-title-case-a-sentence-spec'),
      require(basic + '07-return-largest-numbers-in-arrays-spec'),
      require(basic + '08-confirm-the-ending-spec'),
      require(basic + '09-repeat-a-string-repeat-a-string-spec'),
      require(basic + '10-truncate-a-string-spec'),
      require(basic + '11-chunky-monkey-spec'),
      require(basic + '12-slasher-flick-spec'),
      require(basic + '13-mutations-spec'),
      require(basic + '14-falsy-bouncer-spec'),
      require(basic + '15-seek-and-destroy-spec'),
      require(basic + '16-where-do-i-belong-spec'),
      require(basic + '17-ceasar-cipher-spec')
   ];

   const intermediate_suite = [
      require(intermediate + '01-sum-all-numbers-in-a-range-spec'),
      require(intermediate + '02-diff-two-arrays-spec'),
      require(intermediate + '03-roman-numeral-converter-spec'),
      require(intermediate + '04-where-art-thou-spec'),
      require(intermediate + '05-search-and-replace-spec'),
      require(intermediate + '06-pig-latin-spec'),
      require(intermediate + '07-dna-pairing-spec'),
      require(intermediate + '08-missing-letters-spec'),
      require(intermediate + '09-boo-who-spec'),
      require(intermediate + '10-sorted-union-spec'),
      require(intermediate + '11-convert-html-entities-spec'),
      require(intermediate + '12-spinal-tap-case-spec'),
      require(intermediate + '13-sum-all-odd-fibonacci-numbers-spec'),
      require(intermediate + '14-sum-all-primes-spec'),
      require(intermediate + '15-smallest-common-multiple-spec'),
      require(intermediate + '16-finders-keepers-spec'),
      require(intermediate + '17-drop-it-spec'),
      require(intermediate + '18-steamroller-spec'),
      require(intermediate + '19-binary-agents-spec'),
      require(intermediate + '20-everything-be-true-spec'),
      require(intermediate + '21-arguments-optional-spec')
   ];

   const upper_suite = [
      require(upper + '01-make-a-person-spec'),
      require(upper + '02-map-the-debris-spec'),
      require(upper + '03-pairwise-spec')
   ];

   const advanced_suite = [
      require(advanced + '01-validate-us-telephone-numbers-spec'),
      require(advanced + '02-symmetric-difference-spec'),
      require(advanced + '03-exact-change-spec'),
      require(advanced + '04-inventory-update-spec'),
      require(advanced + '05-no-repeats-please-spec'),
   ];


   /********************************************************************/
   let tests = [];

   if (type === 'all') {
      tests = Array.prototype.concat(
         basic_suite, intermediate_suite,
         upper_suite, advanced_suite
      );

      return tests;
   }

   let suite = [];
   switch (type) {
      case 'basic':
         suite = basic_suite;
         break;

      case 'intermediate':
         suite = intermediate_suite;
         break;

      case 'upper':
         suite = upper_suite;
         break;

      case 'advanced':
         suite = advanced_suite;
         break;

      default:
         suite = Array.prototype.concat(
            basic_suite, intermediate_suite,
            upper_suite, advanced_suite
         );
   }


   if (filelist !== 'all') {
      filelist = filelist.split(',');
      for (let i = 0, len = filelist.length; i < len; ++i) {
         if (/[.]{3}/.test(filelist[i])) {
            const range = makeRange(filelist[i]);
            range.forEach(file_num => {
               tests.push(suite[file_num - 1]);
            });

            continue;
         }

         const file_num = parseInt(filelist[i], 10);
         tests.push(suite[file_num - 1]);
      }
   }
   else { // all tests
      tests = suite;
   }


   function makeRange(file_range) {
      file_range = file_range.split('...');
      let min = parseInt(file_range[0], 10);
      const max = parseInt(file_range[1], 10);

      let range = new Array(max - min + 1);

      for (let i = 0, len = range.length; i < len; ++i) {
         range[i] = min++;
      }

      return range;
   }


   return tests;
}


module.exports = setPath;
