module.exports = function () {
  'use strict';

  var expect = require("chai")
    .expect;

  var find = require("./intermediate-algo-collection")
    .find;

  var tests = require("./test-cases/16-test.js");

  describe("Finders Keepers", () => {
    describe("find()", () => {
      it("should return a number or undefined", () => {
        tests.forEach(test => {
          let result = find(...test.input);

          expect(result)
            .to.satisfy(result => {
              if (typeof result === "number" || result === undefined)
                return true;
            });
        });
      });

      it("should returns the first element in the array that " +
        "passes the given truth test", () => {
          tests.forEach(test => {
            let result = find(...test.input);

            expect(result)
              .to.equal(test.expected);
          });
        });
    });
  });
};
