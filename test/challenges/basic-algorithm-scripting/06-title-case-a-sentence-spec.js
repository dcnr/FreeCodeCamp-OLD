module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const titleCase = require('./basic-algo-collection')
    .titleCase;


  describe('Title Case', function () {
    describe('titleCase()', function () {
      const test_values = {
        "I'm a little tea pot": "I'm A Little Tea Pot",
        'sHoRt AnD sToUt': 'Short And Stout',
        'HERE IS MY HANDLE HERE IS MY SPOUT': 'Here Is My Handle Here Is My Spout'
      };

      it('should return a string', function () {
        const input = "I'm a little tea pot";
        const result = titleCase(input);

        expect(result)
          .to.be.a('string');
      });

      it('should return the provided string with the first letter ' +
        'of each word capitalized',
        function () {
          Object.keys(test_values)
            .forEach(key => {
              const result = titleCase(key);
              const answer = test_values[key];

              expect(result)
                .to.equal(answer);
            });
        });

      it('should make sure the rest of the word is in lower case',
        function () {
          Object.keys(test_values)
            .forEach(key => {
              const result = titleCase(key)
                .split(' ')
                .map(val =>
                  val.substr(1)
                );

              const answer = test_values[key]
                .split(' ')
                .map(val =>
                  val.substr(1)
                  .toLowerCase()
                );

              result.forEach(
                (result, index) =>
                expect(result)
                .to.equal(answer[index]));
            });
        });
    });
  });
};
