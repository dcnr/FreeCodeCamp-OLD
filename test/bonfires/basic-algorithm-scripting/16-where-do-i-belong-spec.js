module.exports = function () {
  var expect = require("chai")
    .expect;

  var where = require("./basic-algo-collection")
    .where;

  var test_values = [
    {
      input: [[40, 60], 50],
      expected: 1
    },
    {
      input: [[10, 20, 30, 40, 50], 35],
      expected: 3
    },
    {
      input: [[10, 20, 30, 40, 50], 30],
      expected: 2
    },
    {
      input: [[3, 10, 5], 3],
      expected: 0
    },
    {
      input: [[5, 3, 20, 3], 5],
      expected: 2
    },
    {

      input: [[2, 20, 10], 19],
      expected: 2
    },
    {
      input: [[2, 5, 10], 15],
      expected: 3
    }
  ];


  describe("Where do I belong", () => {
    describe("where()", () => {
      it("should return a number", () => {
        test_values.forEach(test => {
          var result = where(...test.input);


          expect(result)
            .to.be.a("number");
        });
      });

      it("should return the index at which the given value " +
        "should be inserted", () => {
          test_values.forEach(test => {
            var result = where(...test.input);

            expect(result)
              .to.equal(test.expected);
          });
        });
    });
  });
};
