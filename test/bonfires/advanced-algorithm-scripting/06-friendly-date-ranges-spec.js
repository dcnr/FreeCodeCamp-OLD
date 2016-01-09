module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const friendly = require('./advanced-algo-collection')
    .friendly;


  describe('Friendly Date Ranges', function () {
    describe('friendly()', function () {
      it('should return an array', function () {
        const result = friendly(['2016-07-01', '2016-07-04']);

        expect(result)
          .to.be.an('array');
      });


      it('should return same date if date is the same', function () {
        const result = friendly(["2018-01-01", "2018-01-01"]);

        expect(result)
          .to.deep.equal(["January 1st, 2018"]);
      });


      it('should only return the day if the year and the month ' +
        'is the same',
        function () {
          const result = friendly(['2016-07-01', '2016-07-04']);

          expect(result)
            .to.deep.equal(['July 1st', '4th']);
        });


      it('should return the month and date if year is the same',
        function () {
          const result = friendly(["2017-03-01", "2017-05-05"]);

          expect(result)
            .to.deep.equal(["March 1st", "May 5th"]);
        });

      it('should return day and month if within a year, but clarify ' +
        'if same month',
        function () {
          let result = friendly(['2016-12-01', '2017-02-03']);

          expect(result)
            .to.deep.equal(['December 1st', 'February 3rd']);

          result = friendly(["2022-09-05", "2023-09-04"]);

          expect(result)
            .to.deep.equal(["September 5th, 2022",
              "September 4th, 2023"]);
        });

      it('should return month day, year if farther than a year',
        function () {
          const result = friendly(["2016-12-01",
            "2018-02-03"]);

          expect(result)
            .to.deep.equal(["December 1st, 2016",
              "February 3rd, 2018"]);
        });
    });
  });
};
