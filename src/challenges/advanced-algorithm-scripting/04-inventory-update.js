/* Bonfire: Inventory Update
 * http://www.freecodecamp.com/challenges/bonfire-inventory-update
 *
 * Compare and update inventory stored in a 2d array against a second
 * 2d array of a fresh delivery. Update current inventory item quantity,
 * and if an item cannot be found, add the new item and quantity
 * into the inventory array in alphabetical order.
 *
 */


function Storage(curr_inv) {
  'use strict';

  this._inv = (function () {
    const inv = curr_inv.reduce((inv, items) => {
      const item_name = items[1];
      const amount = items[0];

      inv[item_name] = amount;

      return inv;
    }, {});

    return inv;
  }(curr_inv));

  this._new_items = [];
}


Storage.prototype.setNewItems = function (new_inv) {
  'use strict';

  const inv = this._inv;
  const new_items = this._new_items;


  if (new_inv.length) {
    new_inv.forEach(new_item => {
      const item_name = new_item[1];
      const amount = new_item[0];

      if (!inv.hasOwnProperty(item_name) ||
        inv[item_name] !== new_item[amount]) {

        new_items.push(new_item);

      }
    });
  }


  return this;
};


Storage.prototype.getNewItems = function () {
  'use strict';

  return this._new_items;
};


Storage.prototype.updateInventory = function () {
  'use strict';

  const inv = this._inv;
  const new_items = this._new_items;


  if (new_items.length) {
    new_items.forEach(item => {
      const item_name = item[1];
      const amount = item[0];

      if (inv.hasOwnProperty(item_name)) {
        inv[item_name] += amount;
      }
      else {
        inv[item_name] = amount;
      }
    });
  }


  return this;
};


Storage.prototype.getInventory = function () {
  'use strict';

  const inv = this._inv;
  const items = Object
    .keys(inv)
    .sort();

  const curr_inv = items.map(item_name => {
    const amount = inv[item_name];

    return [amount, item_name];
  });


  return curr_inv;
};


function inventory(curr_inv, new_inv) {
  'use strict';

  const storage = new Storage(curr_inv);
  const result = storage.setNewItems(new_inv)
    .updateInventory()
    .getInventory();


  return result;
}


module.exports = inventory;
