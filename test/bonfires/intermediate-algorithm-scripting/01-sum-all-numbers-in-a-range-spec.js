module.exports = function () {
  var expect = require("chai")
    .expect;

  var sumAll = require("./intermediate-algo-collection")
    .sumAll;

  var tests = require("./test-cases/01-test.js");

  describe("Sum all Numbers in a Range", () => {
    describe("sumAll()", () => {
      it("should return a number", () => {
        tests.forEach(test => {
          var result = sumAll(test.input);

          expect(result)
            .to.be.a("number");
        });
      });

      it("should return the sum of those two numbers " +
        "and all numbers between them", () => {
          tests.forEach(test => {
            var result = sumAll(test.input);

            expect(result)
              .to.equal(test.expected);
          });
        });
    });
  });
};
