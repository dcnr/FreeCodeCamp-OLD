module.exports = function () {
  'use strict';

  var expect = require("chai")
    .expect;

  var myReplace = require("./intermediate-algo-collection")
    .myReplace;

  var tests = require("./test-cases/05-test.js");

  describe("Search and Replace", () => {
    describe("myReplace()", () => {
      it("should return a string", () => {
        tests.forEach(test => {
          let result = myReplace(...test.input);

          expect(result)
            .to.be.a("string");
        });
      });

      it("should replace the target word with the supplied word " +
        "while maintaining its case.", () => {
          tests.forEach(test => {
            let result = myReplace(...test.input);

            expect(result)
              .to.be.equal(test.expected);
          });
        });
    });
  });
};
