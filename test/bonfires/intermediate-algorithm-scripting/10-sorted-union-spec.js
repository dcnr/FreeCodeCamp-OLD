module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const unite = require('./intermediate-algo-collection')
    .unite;

  const tests = require('./test-cases/10-test.js');

  describe('Sorted Union', function () {
    describe('unite()', function () {
      it('should return an array', function () {
        tests.forEach(test => {
          let result = unite(...test.input);

          expect(result)
            .to.be.an('array');
        });
      });

      it('should return all unique values in their original ' +
        'order',
        function () {
          tests.forEach(test => {
            let result = unite(...test.input);

            expect(result)
              .to.deep.equal(test.expected);
          });
        });
    });
  });
};
