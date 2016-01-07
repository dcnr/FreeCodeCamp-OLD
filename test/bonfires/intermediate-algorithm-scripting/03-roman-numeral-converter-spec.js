module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const convert = require('./intermediate-algo-collection')
    .convert;

  const test_cases = require('./test-cases/03-test');

  describe('Roman Numeral Converter', function () {
    describe('convert()', function () {
      it('should return a string', function () {
        test_cases.forEach(test => {
          const result = convert(test.input);

          expect(result)
            .to.be.a('string');
        });
      });

      it('should return the string values in upper case', function () {
        test_cases.forEach(test => {
          const result = convert(test.input);

          expect(result)
            .to.be.match(/[A-Z]/);
        });
      });

      it('should convert given number to roman numeral', function () {
        test_cases.forEach(test => {
          const result = convert(test.input);

          expect(result)
            .to.be.equal(test.expected);
        });
      });
    });
  });
};
