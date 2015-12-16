module.exports = function () {
	'use strict';

	var expect = require("chai")
		.expect;

	var sumFibs = require("./intermediate-algo-collection")
		.sumFibs;

	var tests = require("./test-cases/13-test.js");

	describe("Sum All Odd Fibonacci Numbers", () => {
		describe("sumFibs()", () => {
			it("should return a number", () => {
				tests.forEach(test => {
					let result = sumFibs(test.input);

					expect(result)
						.to.be.a("number");
				});
			});

			it("should sum odd Fibonacci numbers up to given input", () => {
				tests.forEach(test => {
					let result = sumFibs(test.input);

					expect(result)
						.to.equal(test.expected);
				});
			});
		});
	});
};
