module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;
  const rot13 = require('./basic-algo-collection')
    .rot13;


  describe("Ceasar's Cipher", function () {
    describe('rot13', function () {
      it('should return a string', function () {
        const result = rot13('SERR PBQR PNZC');

        expect(result)
          .to.be.a('string');
      });

      it('should return the decoded cipher, preserve punctuation',
        function () {
          let result;

          result = rot13('SERR PBQR PNZC');
          expect(result)
            .to.be.equal('FREE CODE CAMP');

          result = rot13('SERR CVMMN!');
          expect(result)
            .to.be.equal('FREE PIZZA!');

          result = rot13(
            'GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.');
          expect(result)
            .to.be.equal(
              'THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.');
        });
    });
  });
};
