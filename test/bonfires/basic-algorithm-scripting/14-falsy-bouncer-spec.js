module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const bouncer = require('./basic-algo-collection')
    .bouncer;

  const test_values = [
    {
      input: [7, 'ate', '', false, 9],
      expected: [7, 'ate', 9]
    },
    {
      input: ['a', 'b', 'c'],
      expected: ['a', 'b', 'c']
    },
    {
      input: [false, null, 0, NaN, undefined, ''],
      expected: []
    }
  ];

  describe('Falsy Bouncer', function () {
    describe('bouncer()', function () {
      it('should return an array', function () {
        test_values.forEach(test => {
          const result = bouncer(test.input);

          expect(result)
            .to.be.an('array');
        });
      });

      it('should remove all falsy values', function () {
        test_values.forEach(test => {
          const result = bouncer(test.input);

          expect(result)
            .to.deep.equal(test.expected);
        });
      });
    });
  });
};
