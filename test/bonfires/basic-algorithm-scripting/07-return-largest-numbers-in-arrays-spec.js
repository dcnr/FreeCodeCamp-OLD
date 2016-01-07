module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const largestOfFour = require('./basic-algo-collection')
    .largestOfFour;


  const test_values = [
    {
      input: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39],
        [1000, 1001, 857, 1]],
      answer: [5, 27, 39, 1001]
    },
    {
      input: [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39],
        [1000, 1001, 857, 1]],
      answer: [27, 5, 39, 1001]
    },
    {
      input: [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39],
        [1000000, 1001, 857, 1]],
      answer: [9, 35, 97, 1000000]
    }
  ];


  describe('Largest of Four', function () {
    describe('largestOfFour()', function () {
      it('should return an array', function () {
        const input = test_values[0].input;
        const result = largestOfFour(input);

        expect(result)
          .to.be.an('array');
      });

      it('return an array consisting of the largest number ' +
        'from each provided sub-array',
        function () {
          test_values.forEach(test => {
            const result = largestOfFour(test.input);
            const answer = test.answer;

            expect(result)
              .to.deep.equal(answer);
          });
        });
    });
  });
};
