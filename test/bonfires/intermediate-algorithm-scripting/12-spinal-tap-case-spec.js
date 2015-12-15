module.exports = function () {
	'use strict';

	var expect = require("chai")
		.expect;

	var spinalCase = require("./intermediate-algo-collection")
		.spinalCase;

	var tests = require("./test-cases/12-test.js");

	describe("Spinal Tap Case", () => {
		describe("spinalCase()", () => {
			it("should return a string", () => {
				tests.forEach(test => {
					let result = spinalCase(test.input);

					expect(result)
						.to.be.a("string");
				});
			});

			it("should return input as spinal case", () => {
				tests.forEach(test => {
					let result = spinalCase(test.input);

					expect(result)
						.to.equal(test.expected);
				});
			});
		});
	});
};
