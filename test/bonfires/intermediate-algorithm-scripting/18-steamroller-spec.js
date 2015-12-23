module.exports = function () {
  'use strict';

  var expect = require("chai")
    .expect;

  var steamroller = require("./intermediate-algo-collection")
    .steamroller;

  var tests = require("./test-cases/18-test.js");

  describe("Steamroller", () => {
    describe("steamroller()", () => {
      it("should return an array", () => {
        tests.forEach(test => {
          let result = steamroller(test.input);

          expect(result)
            .to.be.an("array");
        });
      });

      it("should return a flattened array, removing any nesting", () => {
        tests.forEach(test => {
          let result = steamroller(test.input);

          expect(result)
            .to.deep.equal(test.expected);
        });
      });
    });
  });
};
