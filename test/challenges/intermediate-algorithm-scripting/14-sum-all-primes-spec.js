module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const sumPrimes = require('./intermediate-algo-collection')
    .sumPrimes;

  const tests = require('./test-cases/14-test.js');

  describe('Sum All Primes', function () {
    describe('sumPrimes()', function () {
      it('should return a number', function () {
        tests.forEach(test => {
          let result = sumPrimes(test.input);

          expect(result)
            .to.be.a('number');
        });
      });

      it('should return the sum of all primes up to given number',
        function () {
          tests.forEach(test => {
            let result = sumPrimes(test.input);

            expect(result)
              .to.equal(test.expected);
          });
        });
    });
  });
};
