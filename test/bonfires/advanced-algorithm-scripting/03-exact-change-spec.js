module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const drawer = require('./advanced-algo-collection')
    .drawer;

  const tests = require('./test-cases/03-test');

  describe('Exact Change', function () {
    describe('drawer()', function () {
      it("should return Insufficient Funds if there isn't enough " +
        'change.',
        function () {
          const result = drawer(...tests[0].input);

          expect(result)
            .to.equal(tests[0].expected);
        });

      it('should return Closed if cid is empty after change',
        function () {
          const result = drawer(...tests[1].input);


          expect(result)
            .to.equal(tests[1].expected);
        });

      it('should return the proper change in a 2d array', function () {
        tests.forEach(test => {
          const result = drawer(...test.input);

          expect(result)
            .to.deep.equal(test.expected);
        });
      });
    });
  });
};
