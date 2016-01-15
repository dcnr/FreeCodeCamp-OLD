module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const spinalCase = require('./intermediate-algo-collection')
    .spinalCase;

  const tests = require('./test-cases/12-test.js');

  describe('Spinal Tap Case', function () {
    describe('spinalCase()', function () {
      it('should return a string', function () {
        tests.forEach(test => {
          let result = spinalCase(test.input);

          expect(result)
            .to.be.a('string');
        });
      });

      it('should return input as spinal case', function () {
        tests.forEach(test => {
          let result = spinalCase(test.input);

          expect(result)
            .to.equal(test.expected);
        });
      });
    });
  });
};
