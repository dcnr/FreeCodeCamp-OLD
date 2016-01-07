module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const end = require('./basic-algo-collection')
    .end;

  const test_values = {
    true: [
      {
        src: 'Bastian',
        target: 'n'
      },
      {
        src: 'He has to give me a new name',
        target: 'name'
      },
      {
        src: 'He has to give me a new name',
        target: 'me'
      }
    ],

    false: [
      {
        src: 'Connor',
        target: 'n'
      },
      {
        src: 'Walking on water and developing software from a ' +
          'specification are easy if both are frozen',
        target: 'specification'
      },
      {
        src: 'He has to give me a new name',
        target: 'na'
      },
      {
        src: 'If you want to save our world, you must hurry. ' +
          'We dont know how much longer we can withstand the nothing',
        target: 'mountain'
      }
    ]
  };


  describe('Confirm the Ending', function () {
    describe('end()', function () {
      it('should return a boolean', function () {
        Object.keys(test_values)
          .forEach(key => {
            test_values[key].forEach(test => {
              const result = end(test.src, test.target);

              expect(result)
                .to.be.a('boolean');
            });
          });

      });

      it('should return true if input string ends with target string',
        function () {
          Object.keys(test_values)
            .forEach(key => {
              test_values[key].forEach(test => {
                const result = end(test.src, test.target);

                const answer = key === 'true' ? true : false;
                expect(result)
                  .to.be.equal(answer);
              });
            });
        });
    });
  });
};
