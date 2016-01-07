module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const fearNotLetter = require('./intermediate-algo-collection')
    .fearNotLetter;

  const tests = require('./test-cases/08-test');

  describe('Missing Letters', function () {
    describe('fearNotLetter()', function () {
      it('should return a string', function () {
        tests.forEach(test => {
          let result = fearNotLetter(test.input);

          expect(result)
            .to.satisfy(result => {
              if (typeof result === 'string') {
                return true;
              }

              if (result === undefined) {
                return true;
              }
            });

        });
      });

      it('should return the missing letter in the sequence', function () {
        tests.forEach(test => {
          let result = fearNotLetter(test.input);

          expect(result)
            .to.be.equal(test.expected);
        });
      });
    });
  });
};
