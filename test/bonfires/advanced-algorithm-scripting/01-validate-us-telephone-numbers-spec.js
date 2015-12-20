module.exports = function () {
	'use strict';

	const expect = require("chai")
		.expect;

	const telephoneCheck = require("./advanced-algo-collection")
		.telephoneCheck;

	const tests = require("./test-cases/01-tests");

	describe("Validate US Telephone Numbers", () => {
		describe("telephoneCheck()", () => {
			it("should return a boolean", () => {
				tests.forEach(test => {
					const result = telephoneCheck(test.input);

					expect(result)
						.to.be.a("boolean");
				});
			});

			it("should properly filter out the invalid telephone numbers", () => {
				tests.forEach(test => {
					const result = telephoneCheck(test.input);

					expect(result)
						.to.equal(test.expected);
				});
			});
		});
	});
};
