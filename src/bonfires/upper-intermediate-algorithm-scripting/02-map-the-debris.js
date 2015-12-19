/* Bonfire: Map the Debris
 * http://www.freecodecamp.com/challenges/bonfire-map-the-debris
 *
 * Return a new array that transforms the element's average
 * altitude into their orbital periods.
 *
 * The array will contain objects in the
 * format {name: 'name', avgAlt: avgAlt}.
 *
 * You can read about orbital periods on wikipedia.
 *
 * The values should be rounded to the nearest whole number.
 * The body being orbited is Earth.
 *
 * The radius of the earth is 6367.4447 kilometers,
 * and the GM value of earth is 398600.4418
 *
 */


function orbitalPeriod(arr) {
	'use strict';

	const GM = 398600.4418;
	const earthRadius = 6367.4447;
	let results = [];


	function getPeriod(alt) {
		const a = alt + earthRadius;

		return Math.round(2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM));
	}

	function OrbitalData(name, period) {
		this._name = name;
		this._orbitalPeriod = period;
	}

	OrbitalData.prototype.createData = function () {
		return {
			name: this._name,
			orbitalPeriod: this._orbitalPeriod
		};
	};

	for (let i = arr.length - 1; i >= 0; --i) {
		const name = arr[i].name;
		const avgAlt = arr[i].avgAlt;
		const op = getPeriod(avgAlt);
		const data = new OrbitalData(name, op);

		results.push(data.createData());
	}

	// reversed to match FCC checker
	return results.reverse();
}


/* exports */
module.exports = orbitalPeriod;
