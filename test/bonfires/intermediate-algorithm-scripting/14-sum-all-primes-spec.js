module.exports = function () {
  'use strict';

  var expect = require("chai")
    .expect;

  var sumPrimes = require("./intermediate-algo-collection")
    .sumPrimes;

  var tests = require("./test-cases/14-test.js");

  describe("Sum All Primes", () => {
    describe("sumPrimes()", () => {
      it("should return a number", () => {
        tests.forEach(test => {
          let result = sumPrimes(test.input);

          expect(result)
            .to.be.a("number");
        });
      });

      it("should return the sum of all primes up to given number", () => {
        tests.forEach(test => {
          let result = sumPrimes(test.input);

          expect(result)
            .to.equal(test.expected);
        });
      });
    });
  });
};
