module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const pair = require('./intermediate-algo-collection')
    .pair;

  const tests = require('./test-cases/07-test');

  describe('DNA Pairing', function () {
    describe('pair()', function () {
      it('should return an array that is not empty', function () {
        tests.forEach(test => {
          let result = pair(test.input);

          expect(result)
            .to.be.an('array');

          // jshint -W030
          expect(result)
            .to.not.be.empty;
        });
      });

      it('should return a multidimensional array', function () {
        tests.forEach(test => {
          let result = pair(test.input);


          expect(result)
            .to.satisfy(result => {
              return result.every(val => val.constructor ===
                Array);
            }, 'element should be an array');
        });
      });

      it('should return DNA pairs', function () {
        tests.forEach(test => {
          let result = pair(test.input);

          expect(result)
            .to.deep.include.members(test.expected);
        });
      });
    });
  });
};
