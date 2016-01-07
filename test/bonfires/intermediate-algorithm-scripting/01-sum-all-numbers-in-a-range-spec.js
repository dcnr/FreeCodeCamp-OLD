module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const sumAll = require('./intermediate-algo-collection')
    .sumAll;

  const tests = require('./test-cases/01-test.js');

  describe('Sum all Numbers in a Range', function () {
    describe('sumAll()', function () {
      it('should return a number', function () {
        tests.forEach(test => {
          const result = sumAll(test.input);

          expect(result)
            .to.be.a('number');
        });
      });

      it('should return the sum of those two numbers ' +
        'and all numbers between them',
        function () {
          tests.forEach(test => {
            const result = sumAll(test.input);

            expect(result)
              .to.equal(test.expected);
          });
        });
    });
  });
};
