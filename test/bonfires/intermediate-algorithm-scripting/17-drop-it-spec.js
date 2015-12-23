module.exports = function () {
  'use strict';

  var expect = require("chai")
    .expect;

  var drop = require("./intermediate-algo-collection")
    .drop;

  var tests = require("./test-cases/17-test.js");

  describe("Drop It", () => {
    describe("drop()", () => {
      it("should return an array", () => {
        tests.forEach(test => {
          let result = drop(...test.input);

          expect(result)
            .to.be.an("array");
        });
      });

      it("should drop elements until the predicate returns true", () => {
        tests.forEach(test => {
          let result = drop(...test.input);

          expect(result)
            .to.deep.equal(test.expected);
        });
      });
    });
  });
};
