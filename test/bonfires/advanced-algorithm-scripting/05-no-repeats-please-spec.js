module.exports = function () {
  'use strict';

  const expect = require("chai")
    .expect;

  const permAlone = require("./advanced-algo-collection")
    .permAlone;

  const tests = require("./test-cases/05-test");

  describe("No Repeats Please", function () {
    describe("permAlone()", function () {
      it("should return a number", function () {
        const result = permAlone("aab");

        expect(result)
          .to.be.a("number");
      });

      it("should return the number of permutations " +
        "that don't have repeated characters",
        function () {
          tests.forEach(test => {
            const result = permAlone(test.input);

            expect(result)
              .to.be.equal(test.expected);
          });
        });
    });
  });
};
