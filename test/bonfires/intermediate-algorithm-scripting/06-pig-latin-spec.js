module.exports = function () {
  'use strict';

  var expect = require("chai")
    .expect;

  var translate = require("./intermediate-algo-collection")
    .translate;

  var tests = require("./test-cases/06-test");

  describe("Pig Latin", () => {
    describe("translate()", () => {
      it("should return a string", () => {
        tests.forEach(test => {
          let result = translate(test.input);

          expect(result)
            .to.be.a("string");
        });
      });

      it("should translate the provided string to pig latin", () => {
        tests.forEach(test => {
          let result = translate(test.input);

          expect(result)
            .to.be.equal(test.expected);
        });
      });
    });
  });
};
