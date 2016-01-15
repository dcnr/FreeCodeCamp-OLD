module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const drop = require('./intermediate-algo-collection')
    .drop;

  const tests = require('./test-cases/17-test.js');

  describe('Drop It', function () {
    describe('drop()', function () {
      it('should return an array', function () {
        tests.forEach(test => {
          let result = drop(...test.input);

          expect(result)
            .to.be.an('array');
        });
      });

      it('should drop elements until the predicate returns true',
        function () {
          tests.forEach(test => {
            let result = drop(...test.input);

            expect(result)
              .to.deep.equal(test.expected);
          });
        });
    });
  });
};
