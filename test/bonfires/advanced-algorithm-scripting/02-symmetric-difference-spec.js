module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const sym = require('./advanced-algo-collection')
    .sym;

  const tests = require('./test-cases/02-test');

  describe('Symmetric Difference', function () {
    describe('sym()', function () {
      it('should return an array', function () {
        tests.forEach(test => {
          const result = sym(...test.input);

          expect(result)
            .to.be.an('array');
        });
      });

      it('should return the symmetric difference of each ' +
        'input arrays', function () {
          tests.forEach(test => {
            const result = sym(...test.input);

            expect(result)
              .to.include.members(test.expected);
          });
        });
    });
  });
};
