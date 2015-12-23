module.exports = function () {
  'use strict';

  const expect = require("chai")
    .expect;

  const drawer = require("./advanced-algo-collection")
    .drawer;

  const tests = require("./test-cases/03-test");

  describe("Exact Change", () => {
    describe("drawer()", () => {
      it("should return the change needed", () => {
        const result = drawer(...tests[0].input);

        expect(result)
          .to.equal(tests[0].expected);


      });
    });
  });
};
