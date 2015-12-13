module.exports = function () {
	var expect = require("chai")
		.expect;

	var where = require("./intermediate-algo-collection")
		.where;

	var tests = require("./test-cases/04-test");

	describe("Where Art Though", () => {
		describe("where()", () => {
			it("should return an array", () => {
				tests.forEach(test => {
					var result = where(...test.input);

					expect(result)
						.to.be.an("array");
				});
			});

			it("should return an array containing objects that has " +
				"matching property from source", () => {
					tests.forEach(test => {
						var result = where(...test.input);

						expect(result)
							.to.deep.include.members(test.expected);
					});
				});
		});
	});
};
