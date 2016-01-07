module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const truncate = require('./basic-algo-collection')
    .truncate;

  const test_values = [
    {
      input: {
        src: 'A-tisket a-tasket A green and yellow basket',
        num: 11
      },
      expected: 'A-tisket...'
    },
    {
      input: {
        src: 'Peter Piper picked a peck of pickled peppers',
        num: 14
      },
      expected: 'Peter Piper...'
    },
    {
      input: {
        src: 'A-tisket a-tasket A green and yellow basket',
        num: 'A-tisket a-tasket A green and yellow basket'.length
      },
      expected: 'A-tisket a-tasket A green and yellow basket'
    },
    {
      input: {
        src: 'A-tisket a-tasket A green and yellow basket',
        num: 'A-tisket a-tasket A green and yellow basket'.length + 2
      },
      expected: 'A-tisket a-tasket A green and yellow basket'
    },
    {
      input: {
        src: 'A-',
        num: 1
      },
      expected: 'A...'
    },
    {
      input: {
        src: 'Absolutely Longer',
        num: 2
      },
      expected: 'Ab...'
    }
  ];

  describe('Truncate a String', function () {
    describe('truncate()', function () {
      it('should return a string', function () {
        test_values.forEach(test => {
          const result = truncate(test.input.src, test.input.num);

          expect(result)
            .to.be.a('string');
        });
      });

      it("should truncate input if it's longer than num specified",
        function () {
          test_values.forEach(test => {
            const result = truncate(test.input.src, test.input.num);

            expect(result)
              .to.be.equal(test.expected);
          });
        });

      it("should not add the '...' if num string is less " +
        'than or equal to 3',
        function () {
          const result = truncate(test_values[4].input.src,
            test_values[4].input.num);

          expect(result)
            .to.be.equal(test_values[4].expected);
        });
    });
  });
};
