module.exports = function () {
  var expect = require("chai")
    .expect;

  var convert = require("./intermediate-algo-collection")
    .convert;

  var test_cases = require("./test-cases/03-test");

  describe("Roman Numeral Converter", () => {
    describe("convert()", () => {
      it("should return a string", () => {
        test_cases.forEach(test => {
          var result = convert(test.input);

          expect(result)
            .to.be.a("string");
        });
      });

      it("should return the string values in upper case", () => {
        test_cases.forEach(test => {
          var result = convert(test.input);

          expect(result)
            .to.be.match(/[A-Z]/);
        });
      });

      it("should convert given number to roman numeral", () => {
        test_cases.forEach(test => {
          var result = convert(test.input);

          expect(result)
            .to.be.equal(test.expected);
        });
      });
    });
  });
};
