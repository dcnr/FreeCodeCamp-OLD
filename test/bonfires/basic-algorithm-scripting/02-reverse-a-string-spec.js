module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const reverseString = require('./basic-algo-collection')
    .reverseString;


  describe('Reverse String', function () {
    describe('reverseString()', function () {
      it('should return a string', function () {
        const args = 'hello';
        const results = reverseString(args);

        expect(results)
          .to.be.a('string');
      });

      it('should reverse input string', function () {
        const args = ['hello', 'Howdy', 'Greetings from Earth'];
        const answer = ['olleh', 'ydwoH', 'htraE morf sgniteerG'];

        const results = args.map(
          val => reverseString(val)
        );

        results.forEach((currentValue, index) => {
          expect(currentValue)
            .to.equal(answer[index]);

        });
      });
    });
  });
};
