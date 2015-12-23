module.exports = function () {
  var expect = require("chai")
    .expect;

  var slasher = require("./basic-algo-collection")
    .slasher;

  var test_values = [
    {
      input: {
        arr: [1, 2, 3],
        howMany: 2
      },
      expected: [3]
    },
    {
      input: {
        arr: [1, 2, 3],
        howMany: 0
      },
      expected: [1, 2, 3]
    },
    {
      input: {
        arr: [1, 2, 3],
        howMany: 9
      },
      expected: []
    },
    {
      input: {
        arr: [1, 2, 3],
        howMany: 4
      },
      expected: []
    }
  ];


  describe("Slasher Flick", () => {
    describe("slasher()", () => {
      it("should return an array", () => {
        test_values.forEach(test => {
          var result = slasher(test.input.arr, test.input.howMany);

          expect(result)
            .to.be.an("array");
        });
      });

      it("should return remaining elements of array after removing " +
        "n elements from head", () => {
          test_values.forEach(test => {
            var result = slasher(test.input.arr, test.input.howMany);

            expect(result)
              .to.deep.equal(test.expected);
          });
        });
    });
  });
};
