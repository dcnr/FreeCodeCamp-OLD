module.exports = function () {
	var expect = require("chai")
		.expect;

	var diff = require("./intermediate-algo-collection")
		.diff;


	var tests = [
		{
			input: [[1, 2, 3, 5], [1, 2, 3, 4, 5]],
			expected: [4]
		},
		{
			input: [
				["diorite", "andesite", "grass", "dirt", "pink wool",
					"dead shrub"],
				["diorite", "andesite", "grass", "dirt", "dead shrub"]
			],
			expected: ["pink wool"]
		},
		{
			input: [
				["andesite", "grass", "dirt", "pink wool", "dead shrub"],
				["diorite", "andesite", "grass", "dirt", "dead shrub"]
			],
			expected: ["diorite", "pink wool"]
		},
		{
			input: [
				["andesite", "grass", "dirt", "dead shrub"],
				["andesite", "grass", "dirt", "dead shrub"]
			],
			expected: []
		},
		{
			input: [[1, "calf", 3, "piglet"], [1, "calf", 3, 4]],
			expected: ["piglet", 4]
		},
		{
			input: [[], ["snuffleupagus", "cookie monster", "elmo"]],
			expected: ["snuffleupagus", "cookie monster", "elmo"]
		},
		{
			input: [[1, "calf", 3, "piglet"], [7, "filly"]],
			expected: [1, "calf", 3, "piglet", 7, "filly"]
		}
	];


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
