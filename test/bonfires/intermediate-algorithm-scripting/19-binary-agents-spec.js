module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const binaryAgent = require('./intermediate-algo-collection')
    .binaryAgent;

  const tests = require('./test-cases/19-test.js');

  describe('Binary Agents', function () {
    describe('binaryAgent()', function () {
      it('should return a string', function () {
        tests.forEach(test => {
          let result = binaryAgent(test.input);

          expect(result)
            .to.be.a('string');
        });
      });

      it('should convert binary string to alphabet', function () {
        tests.forEach(test => {
          let result = binaryAgent(test.input);

          expect(result)
            .to.equal(test.expected);
        });
      });
    });
  });
};
