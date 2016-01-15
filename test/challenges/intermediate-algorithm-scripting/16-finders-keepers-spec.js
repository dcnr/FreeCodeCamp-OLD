module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const find = require('./intermediate-algo-collection')
    .find;

  const tests = require('./test-cases/16-test.js');

  describe('Finders Keepers', function () {
    describe('find()', function () {
      it('should return a number or undefined', function () {
        tests.forEach(test => {
          let result = find(...test.input);

          expect(result)
            .to.satisfy(result => {
              if (typeof result === 'number' || result === undefined) {
                return true;
              }
            });
        });
      });

      it('should returns the first element in the array that ' +
        'passes the given truth test',
        function () {
          tests.forEach(test => {
            let result = find(...test.input);

            expect(result)
              .to.equal(test.expected);
          });
        });
    });
  });
};
