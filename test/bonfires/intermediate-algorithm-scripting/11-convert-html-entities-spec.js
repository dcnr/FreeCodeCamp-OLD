module.exports = function () {
	'use strict';

	var expect = require("chai")
		.expect;

	var convertHTML = require("./intermediate-algo-collection")
		.convertHTML;

	var tests = require("./test-cases/11-test.js");

	describe("Convert HTML Entities", () => {
		describe("convert()", () => {
			it("should return a string", () => {
				tests.forEach(test => {
					let result = convertHTML(test.input);

					expect(result)
						.to.be.a("string");
				});
			});

			it("should convert HTML entities to their escaped " +
				"values.", () => {
					tests.forEach(test => {
						let result = convertHTML(test.input);

						expect(result)
							.to.equal(test.expected);
					});
				});
		});
	});
};
