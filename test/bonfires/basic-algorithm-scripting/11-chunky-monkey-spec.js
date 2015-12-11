module.exports = function () {
	var expect = require("chai")
		.expect;

	var chunk = require("./basic-algo-collection")
		.chunk;


	var test_values = [
		{
			input: {
				arr: ["a", "b", "c", "d"],
				num: 2
			},
			expected: [["a", "b"], ["c", "d"]]
			},
		{
			input: {
				arr: [0, 1, 2, 3, 4, 5],
				num: 3
			},
			expected: [[0, 1, 2], [3, 4, 5]]
			},
		{
			input: {
				arr: [0, 1, 2, 3, 4, 5],
				num: 2
			},
			expected: [[0, 1], [2, 3], [4, 5]]
			},
		{
			input: {
				arr: [0, 1, 2, 3, 4, 5],
				num: 4
			},
			expected: [[0, 1, 2, 3], [4, 5]]
			}
		];


	describe("Chunky Monkey", function () {
		describe("chunk()", function () {
			it("should return a multidimensional array", function () {
				test_values.forEach(test => {
					var result = chunk(test.input.arr, test.input.num);

					expect(result)
						.to.be.an("array");

					result.forEach(val =>
						expect(val)
						.to.be.an("array")
					);
				});
			});

			it("should split input into n chunks", function () {
				test_values.forEach(test => {
					var result = chunk(test.input.arr, test.input.num);

					expect(result)
						.to.deep.equal(test.expected);
				});
			});
		});
	});
};
