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

  const _cash_on_hand = (function (cid) {
    // convert the cid array into an
    // object with key,value pairs
    let coh = cid.reduce((obj, pair) => {
      // pair is the [denomination, value]
      obj[pair[0]] = pair[1];

      return obj;
    }, {});

    coh.TOTALCASH = Object.keys(coh)
      .reduce((total, den) => total + coh[den], 0);

    return coh;
  })(cid);

  this.getTotalCash = function () {
    return _cash_on_hand.TOTALCASH;
  };

  this.giveChange = function () {
    let change = [];
    const order = [];



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

  let change = Alice.giveChange();

  return change;
}


console.log(
  drawer(
    19.50,
    20.00, [
      ["PENNY", 0.01], ["NICKEL", 0],
      ["DIME", 0], ["QUARTER", 0],
      ["ONE", 0], ["FIVE", 0],
      ["TEN", 0], ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ]
  )
);


module.exports = drawer;
