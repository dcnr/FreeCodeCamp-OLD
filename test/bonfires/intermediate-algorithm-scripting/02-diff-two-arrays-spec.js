module.exports = function () {
	var expect = require("chai")
		.expect;

	var diff = require("./intermediate-algo-collection")
		.diff;

	var tests = require("./test-cases/02-test.js");

	describe("Diff Two Arrays", () => {
		describe("diff()", () => {
			it("should return an array", () => {
				tests.forEach(test => {
					var result = diff(...test.input);

					expect(result)
						.to.be.an("array");
				});
			});

			it("should return a new array with elements only " +
				"found in the original arrays", () => {
					tests.forEach(test => {
						var result = diff(...test.input);

						expect(result)
							.to.include.members(test.expected);
					});
				});
		});
	});
};
