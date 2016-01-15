module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const smallestCommons = require('./intermediate-algo-collection')
    .smallestCommons;

  const tests = require('./test-cases/15-test.js');

  describe('Smalles Common Multiple', function () {
    describe('smallestCommons()', function () {
      it('should return a numbers', function () {
        tests.forEach(test => {
          let result = smallestCommons(test.input);

          expect(result)
            .to.be.a('number');
        });
      });

      it('should return the smallest common multiple', function () {
        tests.forEach(test => {
          let result = smallestCommons(test.input);

          expect(result)
            .to.equal(test.expected);
        });
      });
    });
  });
};
