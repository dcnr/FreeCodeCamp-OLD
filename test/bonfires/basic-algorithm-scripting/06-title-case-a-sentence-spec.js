module.exports = function () {
	var expect = require("chai")
		.expect;

	var titleCase = require("./basic-algo-collection")
		.titleCase;


	describe("Title Case", function () {
		describe("titleCase()", function () {
			var test_values = {
				"I'm a little tea pot": "I'm A Little Tea Pot",
				"sHoRt AnD sToUt": "Short And Stout",
				"HERE IS MY HANDLE HERE IS MY SPOUT": "Here Is My Handle Here Is My Spout"
			};

			it("should return a string", () => {
				var input = "I'm a little tea pot";
				var result = titleCase(input);

				expect(result)
					.to.be.a("string");
			});

			it("should return the provided string with the first letter " +
				"of each word capitalized", () => {
					Object.keys(test_values)
						.forEach(key => {
							var result = titleCase(key);
							var answer = test_values[key];

							expect(result)
								.to.equal(answer);
						});
				});

			it("should make sure the rest of the word is in lower case", () => {
				Object.keys(test_values)
					.forEach(key => {
						var result = titleCase(key)
							.split(" ")
							.map(val =>
								val.substr(1)
							);

						var answer = test_values[key]
							.split(" ")
							.map(val =>
								val.substr(1)
								.toLowerCase()
							);

						result.forEach(
							(result, index) =>
							expect(result)
							.to.equal(answer[index]));
					});
			});
		});
	});
};
