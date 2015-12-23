module.exports = function () {
  'use strict';

  var expect = require("chai")
    .expect;

  var smallestCommons = require("./intermediate-algo-collection")
    .smallestCommons;

  var tests = require("./test-cases/15-test.js");

  describe("Smalles Common Multiple", () => {
    describe("smallestCommons()", () => {
      it("should return a numbers", () => {
        tests.forEach(test => {
          let result = smallestCommons(test.input);

          expect(result)
            .to.be.a("number");
        });
      });

      it("should return the smallest common multiple", () => {
        tests.forEach(test => {
          let result = smallestCommons(test.input);

          expect(result)
            .to.equal(test.expected);
        });
      });
    });
  });
};
