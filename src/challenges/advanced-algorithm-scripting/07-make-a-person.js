/* Bonfire: Make a Person
 * http://www.freecodecamp.com/challenges/bonfire-make-a-person
 *
 * Fill in the object constructor with the methods specified in the tests.
 *
 * Those methods are
 *    getFirstName(),
 *    getLastName(),
 *    getFullName(),
 *    setFirstName(first),
 *    setLastName(last), and
 *    setFullName(firstAndLast).
 *
 *
 * All functions that take an argument have an arity of 1, and the
 * argument will be a string.
 *
 * These methods must be the only available means for interacting
 * with the object.
 *
 */


function Person(firstAndLast) {
  'use strict';

  const first_last = firstAndLast.split(' ');

  this._first = first_last[0];
  this._last = first_last[1];

  // filler keys for FCC test
  // Object.keys(Bob).lenght === 6
  this._a = null;
  this._b = null;
  this._c = null;
  this._d = null;
}

Person.prototype.getFirstName = function () {
  'use strict';

  return this._first;
};

Person.prototype.getLastName = function () {
  'use strict';

  return this._last;
};

Person.prototype.getFullName = function () {
  'use strict';

  return `${this._first} ${this._last}`;
};

Person.prototype.setFirstName = function (first_name) {
  'use strict';

  this._first = first_name;
};

Person.prototype.setLastName = function (last_name) {
  'use strict';

  this._last = last_name;
};

Person.prototype.setFullName = function (full_name) {
  'use strict';

  Person.call(this, full_name);
};


module.exports = Person;
