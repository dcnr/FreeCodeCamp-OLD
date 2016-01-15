module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const convertHTML = require('./intermediate-algo-collection')
    .convertHTML;

  const tests = require('./test-cases/11-test.js');

  describe('Convert HTML Entities', function () {
    describe('convert()', function () {
      it('should return a string', function () {
        tests.forEach(test => {
          let result = convertHTML(test.input);

          expect(result)
            .to.be.a('string');
        });
      });

      it('should convert HTML entities to their escaped ' +
        'values.',
        function () {
          tests.forEach(test => {
            let result = convertHTML(test.input);

            expect(result)
              .to.equal(test.expected);
          });
        });
    });
  });
};
