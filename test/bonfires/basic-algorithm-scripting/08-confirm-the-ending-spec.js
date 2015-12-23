module.exports = function () {
  var expect = require("chai")
    .expect;

  var end = require("./basic-algo-collection")
    .end;

  var test_values = {
    "true": [
      {
        "src": "Bastian",
        "target": "n"
    },
      {
        "src": "He has to give me a new name",
        "target": "name"
    },
      {
        "src": "He has to give me a new name",
        "target": "me"
    }
  ],

    "false": [
      {
        "src": "Connor",
        "target": "n"
    },
      {
        "src": "Walking on water and developing software from a " +
          "specification are easy if both are frozen",
        "target": "specification"
    },
      {
        "src": "He has to give me a new name",
        "target": "na"
    },
      {
        "src": "If you want to save our world, you must hurry. " +
          "We dont know how much longer we can withstand the nothing",
        "target": "mountain"
    }
  ]
  };


  describe("Confirm the Ending", () => {
    describe("end()", () => {
      it("should return a boolean", () => {
        Object.keys(test_values)
          .forEach(key => {
            test_values[key].forEach(test => {
              var result = end(test.src, test.target);

              expect(result)
                .to.be.a('boolean');
            });
          });

      });

      it("should return true if input string ends with target string", () => {
        Object.keys(test_values)
          .forEach(key => {
            test_values[key].forEach(test => {
              var result = end(test.src, test.target);

              var answer = (key === 'true') ? true : false;
              expect(result)
                .to.be.equal(answer);
            });
          });
      });
    });
  });
};
