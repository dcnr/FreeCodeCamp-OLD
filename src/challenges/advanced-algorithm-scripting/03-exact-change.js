/* Bonfire: Exact Change
 * http://www.freecodecamp.com/challenges/bonfire-exact-change
 *
 * Design a cash register drawer function that accepts purchase
 * price as the first argument, payment as the second argument,
 * and cash-in-drawer (cid) as the third argument.
 *
 * cid is a 2d array listing available currency.
 *
 * Return the string 'Insufficient Funds' if cash-in-drawer is
 * less than the change due. Return the string 'Closed'
 * if cash-in-drawer is equal to the change due.
 *
 * Otherwise, return change in coin and bills, sorted in
 * highest to lowest order.
 *
 */


function Cashier(cid) {
  'use strict';

  // drawer is a modification of the cid
  // it is an object that has an updated
  // cid which holds the pieces of bills
  // or coins it has, and the value of
  // the different denomination.
  // it also has a field for the total
  // cash on hand
  const _drawer = (function (cid) {
    const den_values = [
      100.00, 20.00, 10.00,
      5.00, 1.00, 0.25,
      0.10, 0.05, 0.01
    ];


    // reverse the incoming cid to greatest to least
    cid.reverse();
    const drawer = cid.reduce((drawer, pair, pos) => {
      // pair is [denomination, amount]
      const den = pair[0];
      const amount = pair[1];

      // compute pieces of bills or coins, account for scaling
      const pieces = Math.round(
        (amount / den_values[pos] + 0.00001) * 100
      ) / 100;

      drawer.cid.push([den, amount, pieces, den_values[pos]]);

      // update TOTALCASH, account for scaling
      drawer.TOTALCASH = Math.round(
        (drawer.TOTALCASH + amount + 0.00001) * 100
      ) / 100;

      return drawer;
    }, {
      cid: [],
      TOTALCASH: 0.00
    });


    return drawer;
  })(cid);


  let total_change = [];
  const denomination = 0;
  const pieces = 2;
  const value = 3;


  this.getTotalCash = function () {
    return _drawer.TOTALCASH;
  };


  this.giveChange = function (change_needed) {
    function payOut(pieces_needed, cash) {
      let paid_out;

      // have fewer bills or coins than needed
      if (pieces_needed > cash[pieces]) {
        paid_out = cash[pieces] * cash[value];
      }
      // have more than enough bills or coins
      else {
        paid_out = cash[value] * pieces_needed;
      }

      return paid_out;
    }

    // dole out cash starting from the highest value
    _drawer.cid.forEach(cash => {
      if (cash[value] <= change_needed && cash[pieces] > 0) {
        let pieces_needed = Math.floor(change_needed / cash[value]);
        let paid_out = payOut(pieces_needed, cash);

        change_needed = Math.round(
          (change_needed - paid_out + 0.0001) * 100
        ) / 100;

        total_change.push([cash[denomination], paid_out]);
      }
    });

    if (change_needed !== 0) {
      return 'Insufficient Funds';
    }


    return total_change;
  };
} // end Cashier


function drawer(price, cash, cid) {
  'use strict';

  const change_needed = cash - price;
  const Alice = new Cashier(cid);


  if (change_needed > Alice.getTotalCash()) {
    return 'Insufficient Funds';
  }

  if (change_needed === Alice.getTotalCash()) {
    return 'Closed';
  }

  const change = Alice.giveChange(change_needed);


  return change;
}


module.exports = drawer;
