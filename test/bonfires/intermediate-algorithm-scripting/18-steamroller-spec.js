module.exports = function () {
	'use strict';

	var expect = require("chai")
		.expect;

	var steamroller = require("./intermediate-algo-collection")
		.steamroller;

	var tests = require("./test-cases/18-test.js");

	describe("Steamroller", () => {
		describe("steamroller()", () => {
			//
			// COMMENTING OUT BECAUSE MY steamroller() is
			// DESCTRUCTIVE AND IT MUTATES TEST.INPUT
			//
			// it("should return an array", () => {
			// 	tests.forEach(test => {
			// 		let result = steamroller(test.input);
			//
			// 		expect(result)
			// 			.to.be.an("array");
			//
			// 			console.log("test.input now:", test.input);
			// 	});
			// });

			it("should return a flattened array, removing any nesting", () => {
				tests.forEach(test => {
					let result = steamroller(test.input);

					expect(result)
						.to.deep.equal(test.expected);

					expect(result)
						.to.be.an("array");

				});
			});
		});
	});
};
