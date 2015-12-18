module.exports = function () {
	'use strict';

	var expect = require("chai")
		.expect;

	var add = require("./intermediate-algo-collection")
		.add;

	describe("Arguments Optional", () => {
		describe("add()", () => {
			it("should add the numbers if given two inputs", () => {
				let result = add(2, 3);

				expect(result)
					.to.be.a("number");

				expect(result)
					.to.equal(5);
			});

			it("should return undefined if one of the input isn't a number", () => {
				//jshint -W030

				let result = add("http://bit.ly/IqT6zt");
				expect(result)
					.to.be.undefined;


				result = add(2, "3");
				expect(result)
					.to.be.undefined;


				result = add(2)([3]);
				expect(result)
					.to.be.undefined;

			});

			it("should return a callable function", () => {
				let result = add(2)(3);

				expect(result)
					.to.equal(5);
			});
		});
	});
};
