module.exports = function () {
	'use strict';

	var expect = require("chai")
		.expect;

	var pair = require("./intermediate-algo-collection")
		.pair;

	var tests = require("./test-cases/07-test");

	describe("DNA Pairing", () => {
		describe("pair()", () => {
			it("should return an array that is not empty", () => {
				tests.forEach(test => {
					let result = pair(test.input);

					expect(result)
						.to.be.an("array");

					// jshint -W030
					expect(result)
						.to.not.be.empty;
				});
			});

			it("should return a multidimensional array", () => {
				tests.forEach(test => {
					let result = pair(test.input);


					expect(result)
						.to.satisfy(result => {
							return result.every(val => val.constructor === Array);
						}, "element should be an array");
				});
			});

			it("should return DNA pairs", () => {
				tests.forEach(test => {
					let result = pair(test.input);

					expect(result)
						.to.deep.include.members(test.expected);
				});
			});
		});
	});
};
