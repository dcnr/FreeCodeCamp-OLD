module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const factorialize = require('./basic-algo-collection')
    .factorialize;


  describe('Factorialize a Number', function () {
    describe('factorialize()', function () {
      it('should return a number', function () {
        const args = 5;
        const result = factorialize(args);

        expect(result)
          .to.be.a('number');
      });

      it('should return 1 if input is 0', function () {
        const args = 0;
        const result = factorialize(args);

        expect(result)
          .to.equal(1);
      });

      it('should return the factorial of input', function () {
        const args = [5, 10, 20, 0];
        const answers = [120, 3628800, 2432902008176640000, 1];

        const results = args.map(
          val => factorialize(val)
        );

        results.forEach((currentValue, index) =>
          expect(currentValue)
          .to.equal(answers[index])
        );
      });
    });
  });
};
