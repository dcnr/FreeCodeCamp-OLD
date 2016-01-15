module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const palindrome = require('./basic-algo-collection')
    .palindrome;

  describe('Check for Palindrome', function () {
    describe('palindrome()', function () {
      it('should return a boolean', function () {
        const args = 'eye';
        const result = palindrome(args);

        expect(result)
          .to.be.a('boolean');
      });

      it('should return true if input string is a palindrome ', () => {
        const args = [
          'eye',
          'race car',
          'A man, a plan, a canal. Panama',
          'never odd or even',
          'My age is 0, 0 si ega ym.',
          '0_0 (: /-\ :) 0-0'
        ];

        const results = args.map(
          val => palindrome(val)
        );

        results.forEach((currentValue) =>
          expect(currentValue)
          .to.equal(true)
        );
      });

      it('should return false if input string is not a palindrome', () => {
        const args = [
          'not a palindrome',
          'nope',
          'almostomla',
          '1 eye for of 1 eye.'
        ];

        const results = args.map(
          val => palindrome(val)
        );

        results.forEach((currentValue) =>
          expect(currentValue)
          .to.equal(false)
        );
      });
    });
  });
};
