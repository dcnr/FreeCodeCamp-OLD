module.exports = function () {
	var expect = require("chai")
		.expect;

	var bouncer = require("./basic-algo-collection")
		.bouncer;

	var test_values = [
		{
			input: [7, "ate", "", false, 9],
			expected: [7, "ate", 9]
		},
		{
			input: ["a", "b", "c"],
			expected: ["a", "b", "c"]
		},
		{
			input: [false, null, 0, NaN, undefined, ""],
			expected: []
		}
	];

	describe("Falsy Bouncer", () => {
		describe("bouncer()", () => {
			it("should return an array", () => {
				test_values.forEach(test => {
					var result = bouncer(test.input);

					expect(result)
						.to.be.an("array");
				});
			});

			it("should remove all falsy values", () => {
				test_values.forEach(test => {
					var result = bouncer(test.input);

					expect(result)
						.to.deep.equal(test.expected);
				});
			});
		});
	});
};
