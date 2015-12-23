module.exports = function () {
  var expect = require("chai")
    .expect;

  var destroyer = require("./basic-algo-collection")
    .destroyer;

  var test_values = [
    {
      input: [1, 2, 3, 1, 2, 3],
      args: [2, 3],
      expected: [1, 1]
    },
    {
      input: [1, 2, 3, 5, 1, 2, 3],
      args: [2, 3],
      expected: [1, 5, 1]
    },
    {
      input: [3, 5, 1, 2, 2],
      args: [2, 3, 5],
      expected: [1]
    },
    {
      input: [2, 3, 2, 3],
      args: [2, 3],
      expected: []
    },
    {
      input: ["tree", "hamburger", 53],
      args: ["tree", 53],
      expected: ["hamburger"]
    }
  ];

  describe("Seek and Destroy", () => {
    describe("destroyer()", () => {
      it("should return an array", () => {
        test_values.forEach(test => {
          var result = destroyer(test.input, ...test.args);

          expect(result)
            .to.be.an("array");
        });
      });

      it("should remove the elements given in the arguments " +
        "from the array", () => {
          test_values.forEach(test => {
            var result = destroyer(test.input, ...test.args);

            expect(result)
              .to.deep.equal(test.expected);
          });
        });
    });
  });
};
