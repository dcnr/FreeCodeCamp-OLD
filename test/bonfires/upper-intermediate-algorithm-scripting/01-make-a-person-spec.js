module.exports = function () {
  'use strict';

  var expect = require("chai")
    .expect;

  var Person = require("./upper-algo-collection")
    .Person;

  describe("Make a Person", () => {
    describe("Person()", () => {
      var Bob = new Person("Bob Ross");

      it("should return a Person object", () => {
        expect(Bob)
          .to.be.an.instanceof(Person);
      });

      it("should have a method getFirstName()", () => {
        expect(Bob)
          .to.have.property("getFirstName");
      });

      it("should have a method getLastName()", () => {
        expect(Bob)
          .to.have.property("getLastName");
      });

      it("should have a method getFullName()", () => {
        expect(Bob)
          .to.have.property("getFullName");
      });

      it("should have a method setFirstName()", () => {
        expect(Bob)
          .to.have.property("setFirstName");
      });

      it("should have a method setLastName()", () => {
        expect(Bob)
          .to.have.property("setLastName");
      });

      it("should have a method setFullName()", () => {
        expect(Bob)
          .to.have.property("setFullName");
      });
    });
  });
};
