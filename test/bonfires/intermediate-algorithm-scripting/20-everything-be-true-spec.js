module.exports = function () {
	'use strict';

	var expect = require("chai")
		.expect;

	var every = require("./intermediate-algo-collection")
		.every;

	var tests = require("./test-cases/20-test.js");

	describe("Everything Be True", () => {
		describe("every()", () => {
			it("should return a boolean", () => {
				tests.forEach(test => {
					let result = every(...test.input);

					expect(result)
						.to.be.a("boolean");
				});
			});

			it("should check if the predicate is truthy on all input", () => {
				tests.forEach(test => {
					let result = every(...test.input);

					expect(result)
						.to.equal(test.expected);
				});
			});
		});
	});
};
