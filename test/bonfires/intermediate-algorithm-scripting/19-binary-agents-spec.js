module.exports = function () {
	'use strict';

	var expect = require("chai")
		.expect;

	var binaryAgent = require("./intermediate-algo-collection")
		.binaryAgent;

	var tests = require("./test-cases/19-test.js");

	describe("Binary Agents", () => {
		describe("binaryAgent()", () => {
			it("should return a string", () => {
				tests.forEach(test => {
					let result = binaryAgent(test.input);

					expect(result)
						.to.be.a("string");
				});
			});

			it("should convert binary string to alphabet", () => {
				tests.forEach(test => {
					let result = binaryAgent(test.input);

					expect(result)
						.to.equal(test.expected);
				});
			});
		});
	});
};
