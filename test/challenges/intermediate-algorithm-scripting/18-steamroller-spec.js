module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const steamroller = require('./intermediate-algo-collection')
    .steamroller;

  const tests = require('./test-cases/18-test.js');

  describe('Steamroller', function () {
    describe('steamroller()', function () {
      it('should return an array', function () {
        tests.forEach(test => {
          let result = steamroller(test.input);

          expect(result)
            .to.be.an('array');
        });
      });

      it('should return a flattened array, removing any nesting',
        function () {
          tests.forEach(test => {
            let result = steamroller(test.input);

            expect(result)
              .to.deep.equal(test.expected);
          });
        });
    });
  });
};
