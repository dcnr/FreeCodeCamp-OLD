module.exports = function () {
  var expect = require("chai")
    .expect;

  var repeat = require("./basic-algo-collection")
    .repeat;

  var test_values = [
    {
      "input": {
        "src": "abc",
        "num": 3
      },
      "expected": "abcabcabc"
    },
    {
      "input": {
        "src": "*",
        "num": 3
      },
      "expected": "***"
    },
    {
      "input": {
        "src": "abc",
        "num": 4
      },
      "expected": "abcabcabcabc"
    },
    {
      "input": {
        "src": "abc",
        "num": 1
      },
      "expected": "abc"
    },
    {
      "input": {
        "src": "*",
        "num": 8
      },
      "expected": "********"
    },
    {
      "input": {
        "src": "abc",
        "num": -2
      },
      "expected": ""
    }
  ];

  describe("Repeat a String", () => {
    describe("repeat()", () => {
      it("should return a string", () => {
        test_values.forEach(test => {
          var result = repeat(test.input.src, test.input.num);

          expect(result)
            .to.be.a("string");
        });
      });

      it("should repeat a given string, n times", () => {
        test_values.forEach(test => {
          var result = repeat(test.input.src, test.input.num);

          expect(result)
            .to.be.equal(test.expected);
        });
      });
    });
  });
};
