module.exports = function () {
	var expect = require("chai")
		.expect;

	var mutation = require("./basic-algo-collection")
		.mutation;

	var test_values = {
		true: [
			["hello", "Hello"],
			["zyxwvutsrqponmlkjihgfedcba", "qrstu"],
			["Mary", "Army"],
			["Mary", "Aarmy"],
			["Alien", "line"],
			["floor", "for"]
		],
		false: [
			["hello", "hey"],
			["hello", "neo"]
		]
	};

	describe("Mutations", () => {
		describe("mutation()", () => {
			it("should return a boolean", () => {
				Object.keys(test_values)
					.forEach(key => {
						test_values[key].forEach(input => {
							var result = mutation(input);

							expect(result)
								.to.be.a("boolean");
						});
					});
			});

			it("should check if all letters of second element is in " +
				"the first element", () => {
					Object.keys(test_values)
						.forEach(key => {
							test_values[key].forEach(input => {
								var result = mutation(input);

								var answer = (key === 'true') ? true : false;
								expect(result)
									.to.equal(answer);
							});
						});
				});
		});
	});
};
