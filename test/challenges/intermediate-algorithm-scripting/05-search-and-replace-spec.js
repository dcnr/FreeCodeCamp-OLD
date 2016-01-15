module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const myReplace = require('./intermediate-algo-collection')
    .myReplace;

  const tests = require('./test-cases/05-test.js');

  describe('Search and Replace', function () {
    describe('myReplace()', function () {
      it('should return a string', function () {
        tests.forEach(test => {
          let result = myReplace(...test.input);

          expect(result)
            .to.be.a('string');
        });
      });

      it('should replace the target word with the supplied word ' +
        'while maintaining its case.',
        function () {
          tests.forEach(test => {
            let result = myReplace(...test.input);

            expect(result)
              .to.be.equal(test.expected);
          });
        });
    });
  });
};
