module.exports = function () {
	var expect = require("chai")
		.expect;

	var factorialize = require("./basic-algo-collection")
		.factorialize;


	describe("Factorialize a Number", function () {
		describe("factorialize()", function () {
			it("should return a number", function () {
				var args = 5;
				var result = factorialize(args);

				expect(result)
					.to.be.a('number');
			});

			it("should return 1 if input is 0", function () {
				var args = 0;
				var result = factorialize(args);

				expect(result)
					.to.equal(1);
			});

			it("should return the factorial of input", function () {
				var args = [5, 10, 20, 0];
				var answers = [120, 3628800, 2432902008176640000, 1];
				var results = [];

				results = args.map(
					val => factorialize(val)
				);

				results.forEach((currentValue, index) =>
					expect(currentValue)
					.to.equal(answers[index])
				);
			});
		});
	});
};
