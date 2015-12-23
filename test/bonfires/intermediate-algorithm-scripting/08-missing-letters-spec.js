module.exports = function () {
  'use strict';
  var expect = require("chai")
    .expect;

  var fearNotLetter = require("./intermediate-algo-collection")
    .fearNotLetter;

  var tests = require("./test-cases/08-test");

  describe("Missing Letters", () => {
    describe("fearNotLetter()", () => {
      it("should return a string", () => {
        tests.forEach(test => {
          let result = fearNotLetter(test.input);

          expect(result)
            .to.satisfy(result => {
              if (typeof result === "string")
                return true;

              if (result === undefined)
                return true;
            });

        });
      });

      it("should return the missing letter in the sequence", () => {
        tests.forEach(test => {
          let result = fearNotLetter(test.input);

          expect(result)
            .to.be.equal(test.expected);
        });
      });
    });
  });
};
