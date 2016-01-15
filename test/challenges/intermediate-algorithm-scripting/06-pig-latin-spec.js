module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const translate = require('./intermediate-algo-collection')
    .translate;

  const tests = require('./test-cases/06-test');

  describe('Pig Latin', function () {
    describe('translate()', function () {
      it('should return a string', function () {
        tests.forEach(test => {
          let result = translate(test.input);

          expect(result)
            .to.be.a('string');
        });
      });

      it('should translate the provided string to pig latin',
        function () {
          tests.forEach(test => {
            let result = translate(test.input);

            expect(result)
              .to.be.equal(test.expected);
          });
        });
    });
  });
};
