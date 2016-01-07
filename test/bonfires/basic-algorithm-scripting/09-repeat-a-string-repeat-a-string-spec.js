module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const repeat = require('./basic-algo-collection')
    .repeat;

  const test_values = [
    {
      input: {
        src: 'abc',
        num: 3
      },
      expected: 'abcabcabc'
    },

    {
      input: {
        src: '*',
        num: 3
      },
      expected: '***'
    },

    {
      input: {
        src: 'abc',
        num: 4
      },
      expected: 'abcabcabcabc'
    },

    {
      input: {
        src: 'abc',
        num: 1
      },
      expected: 'abc'
    },

    {
      input: {
        src: '*',
        num: 8
      },
      expected: '********'
    },

    {
      input: {
        src: 'abc',
        num: -2
      },
      expected: ''
    }
  ];

  describe('Repeat a String', function () {
    describe('repeat()', function () {
      it('should return a string', function () {
        test_values.forEach(test => {
          const result = repeat(test.input.src, test.input.num);

          expect(result)
            .to.be.a('string');
        });
      });

      it('should repeat a given string, n times', function () {
        test_values.forEach(test => {
          const result = repeat(test.input.src, test.input.num);

          expect(result)
            .to.be.equal(test.expected);
        });
      });
    });
  });
};
