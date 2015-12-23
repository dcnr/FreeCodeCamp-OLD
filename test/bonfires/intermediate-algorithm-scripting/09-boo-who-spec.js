module.exports = function () {
  'use strict';

  var expect = require("chai")
    .expect;

  var boo = require("./intermediate-algo-collection")
    .boo;

  var tests = require("./test-cases/09-test.js");

  describe("Boo Whoo", () => {
    describe("boo()", () => {
      it("should return a boolean", () => {
        tests.forEach(test => {
          let result = boo(test.input);

          expect(result)
            .to.be.a("boolean");
        });
      });

      it("should check if input is a boolean primitive", () => {
        tests.forEach(test => {
          let result = boo(test.input);

          expect(result)
            .to.equal(test.expected);
        });
      });
    });
  });
};
