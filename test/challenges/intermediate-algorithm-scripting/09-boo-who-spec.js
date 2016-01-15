module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const boo = require('./intermediate-algo-collection')
    .boo;

  const tests = require('./test-cases/09-test.js');

  describe('Boo Whoo', function () {
    describe('boo()', function () {
      it('should return a boolean', function () {
        tests.forEach(test => {
          let result = boo(test.input);

          expect(result)
            .to.be.a('boolean');
        });
      });

      it('should check if input is a boolean primitive', function () {
        tests.forEach(test => {
          let result = boo(test.input);

          expect(result)
            .to.equal(test.expected);
        });
      });
    });
  });
};
