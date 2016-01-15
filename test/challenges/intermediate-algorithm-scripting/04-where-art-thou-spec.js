module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const where = require('./intermediate-algo-collection')
    .where;

  const tests = require('./test-cases/04-test');

  describe('Where Art Though', function () {
    describe('where()', function () {
      it('should return an array', function () {
        tests.forEach(test => {
          const result = where(...test.input);

          expect(result)
            .to.be.an('array');
        });
      });

      it('should return an array containing objects that has ' +
        'matching property from source',
        function () {
          tests.forEach(test => {
            const result = where(...test.input);

            expect(result)
              .to.deep.include.members(test.expected);
          });
        });
    });
  });
};
