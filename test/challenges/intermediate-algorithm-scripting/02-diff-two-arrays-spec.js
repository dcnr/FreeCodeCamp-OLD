module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const diff = require('./intermediate-algo-collection')
    .diff;

  const tests = require('./test-cases/02-test.js');

  describe('Diff Two Arrays', function () {
    describe('diff()', function () {
      it('should return an array', function () {
        tests.forEach(test => {
          const result = diff(...test.input);

          expect(result)
            .to.be.an('array');
        });
      });

      it('should return a new array with elements only ' +
        'found in the original arrays',
        function () {
          tests.forEach(test => {
            const result = diff(...test.input);

            expect(result)
              .to.include.members(test.expected);
          });
        });
    });
  });
};
