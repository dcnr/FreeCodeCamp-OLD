module.exports = function () {
  'use strict';

  var expect = require("chai")
    .expect;

  var unite = require("./intermediate-algo-collection")
    .unite;

  var tests = require("./test-cases/10-test.js");

  describe("Sorted Union", () => {
    describe("unite()", () => {
      it("should return an array", () => {
        tests.forEach(test => {
          let result = unite(...test.input);

          expect(result)
            .to.be.an("array");
        });
      });

      it("should return all unique values in their original " +
        "order", () => {
          tests.forEach(test => {
            let result = unite(...test.input);

            expect(result)
              .to.deep.equal(test.expected);
          });
        });
    });
  });
};
