module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const mutation = require('./basic-algo-collection')
    .mutation;

  const test_values = {
    true: [
      ['hello', 'Hello'],
      ['zyxwvutsrqponmlkjihgfedcba', 'qrstu'],
      ['Mary', 'Army'],
      ['Mary', 'Aarmy'],
      ['Alien', 'line'],
      ['floor', 'for']
    ],
    false: [
      ['hello', 'hey'],
      ['hello', 'neo']
    ]
  };

  describe('Mutations', function () {
    describe('mutation()', function () {
      it('should return a boolean', function () {
        Object.keys(test_values)
          .forEach(key => {
            test_values[key].forEach(input => {
              const result = mutation(input);

              expect(result)
                .to.be.a('boolean');
            });
          });
      });

      it('should check if all letters of second element is in ' +
        'the first element',
        function () {
          Object.keys(test_values)
            .forEach(key => {
              test_values[key].forEach(input => {
                const result = mutation(input);

                const answer = key === 'true' ? true : false;
                expect(result)
                  .to.equal(answer);
              });
            });
        });
    });
  });
};
