module.exports = function () {
  var expect = require("chai")
    .expect;

  var palindrome = require("./basic-algo-collection")
    .palindrome;

  describe("Check for Palindrome", function () {
    describe("palindrome()", function () {
      it("should return a boolean", function () {
        var args = "eye";
        var result = palindrome(args);

        expect(result)
          .to.be.a('boolean');
      });

      it("should return true if input string is a palindrome ", () => {
        var args = [
          "eye",
          "race car",
          "A man, a plan, a canal. Panama",
          "never odd or even",
          "My age is 0, 0 si ega ym.",
          "0_0 (: /-\ :) 0-0"
        ];

        var resutls = [];

        results = args.map(
          val => palindrome(val)
        );

        resutls.forEach((currentValue, index) =>
          expect(currentValue)
          .to.equal(true)
        );
      });

      it("should return false if input string is not a palindrome", () => {
        var args = [
          "not a palindrome",
          "nope",
          "almostomla",
          "1 eye for of 1 eye."
        ];

        var results = [];

        results = args.map(
          val => palindrome(val)
        );

        results.forEach((currentValue, index) =>
          expect(currentValue)
          .to.equal(false)
        );
      });
    });
  });
};
