module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const every = require('./intermediate-algo-collection')
    .every;

  const tests = require('./test-cases/20-test.js');

  describe('Everything Be True', function () {
    describe('every()', function () {
      it('should return a boolean', function () {
        tests.forEach(test => {
          let result = every(...test.input);

          expect(result)
            .to.be.a('boolean');
        });
      });

      it('should check if the predicate is truthy on all input',
        function () {
          tests.forEach(test => {
            let result = every(...test.input);

            expect(result)
              .to.equal(test.expected);
          });
        });
    });
  });
};
