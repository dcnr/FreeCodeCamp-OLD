module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const slasher = require('./basic-algo-collection')
    .slasher;

  const test_values = [
    {
      input: {
        arr: [1, 2, 3],
        howMany: 2
      },
      expected: [3]
    },
    {
      input: {
        arr: [1, 2, 3],
        howMany: 0
      },
      expected: [1, 2, 3]
    },
    {
      input: {
        arr: [1, 2, 3],
        howMany: 9
      },
      expected: []
    },
    {
      input: {
        arr: [1, 2, 3],
        howMany: 4
      },
      expected: []
    }
  ];


  describe('Slasher Flick', function () {
    describe('slasher()', function () {
      it('should return an array', function () {
        test_values.forEach(test => {
          const result = slasher(test.input.arr, test.input.howMany);

          expect(result)
            .to.be.an('array');
        });
      });

      it('should return remaining elements of array after removing ' +
        'n elements from head',
        function () {
          test_values.forEach(test => {
            const result = slasher(test.input.arr, test.input.howMany);

            expect(result)
              .to.deep.equal(test.expected);
          });
        });
    });
  });
};
