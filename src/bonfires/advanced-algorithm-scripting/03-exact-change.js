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


function CashOnHand(cid) {
  'use strict';

  const that = this;

  const _coh = (function (cid) {
    let coh = {};

    cid.forEach(till => {
      const denomination = till[0];
      const amount = till[1];

      coh[denomination] = amount;
    });

    coh.TOTAL = Object.keys(coh)
      .reduce((total, cash) => {
        return total + coh[cash];
      }, 0);

    return coh;
  })(cid);

  this.getTotal = function () {
    return _coh.TOTAL;
  };

}


function drawer(price, cash, cid) {
  'use strict';

  let total_change = cash - price;
  const cash_on_hand = new CashOnHand(cid);

  if (total_change > cash_on_hand.getTotal()) {
    return "Insufficient Funds";
  }


  return 0;
}


module.exports = drawer;
