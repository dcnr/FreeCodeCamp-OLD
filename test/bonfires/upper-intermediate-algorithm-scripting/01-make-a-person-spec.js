module.exports = function () {
	'use strict';

	var expect = require("chai")
		.expect;

	var Person = require("./upper-algo-collection")
		.Person;

	describe("Make a Person", () => {
		describe("Person()", () => {
			it("should return a Person object", () => {
				let Bob = new Person();

				expect(Bob)
					.to.be.an.instanceof(Person);
			});

			it("should have a method getFirstName()", () => {

			});
		});
	});
};
