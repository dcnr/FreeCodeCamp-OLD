module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const Person = require('./upper-algo-collection')
    .Person;

  describe('Make a Person', function () {
    describe('Person()', function () {
      const Bob = new Person('Bob Ross');

      it('should return a Person object', function () {
        expect(Bob)
          .to.be.an.instanceof(Person);
      });

      it('should have a method getFirstName()', function () {
        expect(Bob)
          .to.have.property('getFirstName');
      });

      it('should have a method getLastName()', function () {
        expect(Bob)
          .to.have.property('getLastName');
      });

      it('should have a method getFullName()', function () {
        expect(Bob)
          .to.have.property('getFullName');
      });

      it('should have a method setFirstName()', function () {
        expect(Bob)
          .to.have.property('setFirstName');
      });

      it('should have a method setLastName()', function () {
        expect(Bob)
          .to.have.property('setLastName');
      });

      it('should have a method setFullName()', function () {
        expect(Bob)
          .to.have.property('setFullName');
      });
    });
  });
};
