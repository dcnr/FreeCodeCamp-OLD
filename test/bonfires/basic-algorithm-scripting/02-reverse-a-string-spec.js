module.exports = function () {
	var expect = require("chai")
		.expect;

	var reverseString = require("./basic-algo-collection")
		.reverseString;


	describe("Reverse String", function () {
		describe("reverseString()", function () {
			it("should return a string", function () {
				var args = "hello";
				var results = reverseString(args);

				expect(results)
					.to.be.a('string');
			});

			it("should reverse input string", function () {
				var args = ["hello", "Howdy", "Greetings from Earth"];
				var answer = ["olleh", "ydwoH", "htraE morf sgniteerG"];
				var results = [];

				results = args.map(
					val => reverseString(val)
				);

				results.forEach((currentValue, index) => {
					expect(currentValue)
						.to.equal(answer[index]);

				});
			});
		});
	});

};
