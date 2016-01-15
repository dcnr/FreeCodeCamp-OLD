module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const add = require('./intermediate-algo-collection')
    .add;

  describe('Arguments Optional', function () {
    describe('add()', function () {
      it('should add the numbers if given two inputs', function () {
        let result = add(2, 3);

        expect(result)
          .to.be.a('number');

        expect(result)
          .to.equal(5);
      });

      it(
        "should return undefined if one of the input isn't a number ",
        function () {
          //jshint -W030

          let result = add('http://bit.ly/IqT6zt');
          expect(result)
            .to.be.undefined;


          result = add(2, '3');
          expect(result)
            .to.be.undefined;


          result = add(2)([3]);
          expect(result)
            .to.be.undefined;

        });

      it('should return a callable function', function () {
        let result = add(2)(3);

        expect(result)
          .to.equal(5);
      });
    });
  });
};
