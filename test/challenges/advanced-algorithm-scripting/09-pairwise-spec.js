module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const pairwise = require('./advanced-algo-collection')
    .pairwise;

  const tests = [
    {
      input: [[1, 4, 2, 3, 0, 5], 7],
      expected: 11
    },
    {
      input: [[1, 3, 2, 4], 4],
      expected: 1
    },
    {
      input: [[1, 1, 1], 2],
      expected: 1
    },
    {
      input: [[0, 0, 0, 0, 1, 1], 1], // [ 0, 4, 1, 5]
      expected: 10
    },
    {
      input: [[], 100],
      expected: 0
    },
  ];

  describe('Pairwise', function () {
    describe('pairwise()', function () {
      it('should return a number', function () {
        tests.forEach(test => {
          const result = pairwise(...test.input);

          expect(result)
            .to.be.a('number');
        });
      });

      it('should return the sum of all indices where the values' +
        'equal the target argument',
        function () {
          tests.forEach(test => {
            const result = pairwise(...test.input);

            expect(result)
              .to.equal(test.expected);
          });
        });

    });
  });
};
