module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const sumFibs = require('./intermediate-algo-collection')
    .sumFibs;

  const tests = require('./test-cases/13-test.js');

  describe('Sum All Odd Fibonacci Numbers', function () {
    describe('sumFibs()', function () {
      it('should return a number', function () {
        tests.forEach(test => {
          let result = sumFibs(test.input);

          expect(result)
            .to.be.a('number');
        });
      });

      it('should sum odd Fibonacci numbers up to given input',
        function () {
          tests.forEach(test => {
            let result = sumFibs(test.input);

            expect(result)
              .to.equal(test.expected);
          });
        });
    });
  });
};
