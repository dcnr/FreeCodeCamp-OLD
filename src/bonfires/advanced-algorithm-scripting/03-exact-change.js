/* Bonfire: Exact Change
 * http://www.freecodecamp.com/challenges/bonfire-exact-change
 *
 * Design a cash register drawer function that accepts purchase
 * price as the first argument, payment as the second argument,
 * and cash-in-drawer (cid) as the third argument.
 *
 * cid is a 2d array listing available currency.
 *
 * Return the string "Insufficient Funds" if cash-in-drawer is
 * less than the change due. Return the string "Closed"
 * if cash-in-drawer is equal to the change due.
 *
 * Otherwise, return change in coin and bills, sorted in
 * highest to lowest order.
 *
 */


function Cashier(cid) {
  'use strict';

  const _drawer = (function (cid) {
    const den_values = [
      100.00, 20.00, 10.00,
      5.00, 1.00, 0.25,
      0.10, 0.05, 0.01
    ];

    // reverse the incoming cid to
    // greatest to smallest
    cid.reverse();
    const drawer = cid.reduce((drawer, pair, pos) => {
      // pair is [denomination, amount]
      const den = pair[0];
      const amount = pair[1];


      // compute pieces of bills or coins
      // account for scaling
      const pieces = Math.round(
        (amount / den_values[pos] + 0.00001) * 100
      ) / 100;


      // update TOTALCASH, account for scaling
      drawer.TOTALCASH = Math.round(
        (drawer.TOTALCASH + amount + 0.00001) * 100
      ) / 100;

      drawer.cid.push([den, amount, pieces, den_values[pos]]);

      return drawer;
    }, {
      cid: [],
      TOTALCASH: 0.00
    });

    return drawer;
  })(cid);


  this.getTotalCash = function () {
    return _drawer;
  };


  this.giveChange = function (change_needed) {
    let change = [];


    return change;
  };
}


function drawer(price, cash, cid) {
  'use strict';

  const change_needed = cash - price;
  const Alice = new Cashier(cid);


  if (change_needed > Alice.getTotalCash()) {
    return "Insufficient Funds";
  }


  if (change_needed === Alice.getTotalCash()) {
    return "Closed";
  }


  const change = Alice.getTotalCash();

  return change;
}


console.log(
  drawer(3.26, 100.00, [
      ["PENNY", 1.01], ["NICKEL", 2.05],
       ["DIME", 3.10], ["QUARTER", 4.25],
        ["ONE", 90.00], ["FIVE", 55.00],
        ["TEN", 20.00], ["TWENTY", 60.00],
         ["ONE HUNDRED", 100.00]])
);


module.exports = drawer;
