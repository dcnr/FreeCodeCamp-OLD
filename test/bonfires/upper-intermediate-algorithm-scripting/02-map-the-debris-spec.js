module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;

  const orbitalPeriod = require('./upper-algo-collection')
    .orbitalPeriod;

  describe('Orbital Period', function () {
    describe('orbitalPeriod()', function () {
      it('should return an array', function () {
        const result = orbitalPeriod([{
          name: 'sputnik',
          avgAlt: 35873.5553
          }]);

        expect(result)
          .to.be.an('array');
      });

      it('should return an array of objects with their ' +
        'orbital period computed.',
        function () {
          const result = orbitalPeriod([{
            name: 'iss',
            avgAlt: 413.6
            }, {
            name: 'hubble',
            avgAlt: 556.7
            }, {
            name: 'moon',
            avgAlt: 378632.553
            }]);

          expect(result)
            .to.deep.equal([{
              name: 'iss',
              orbitalPeriod: 5557
              }, {
              name: 'hubble',
              orbitalPeriod: 5734
              }, {
              name: 'moon',
              orbitalPeriod: 2377399
              }]);
        });
    });
  });
};
