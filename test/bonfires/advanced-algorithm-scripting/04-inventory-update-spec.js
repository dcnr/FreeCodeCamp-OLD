module.exports = function () {
   'use strict';

   const expect = require("chai")
      .expect;

   const inventory = require("./advanced-algo-collection")
      .inventory;

   const tests = require("./test-cases/04-test");

   describe("Inventory Update", () => {
      describe("inventory()", () => {
         it.skip("should return the missing values in current inventory " +
            "that is in the new inventory", () => {
               const result = inventory(...tests[0].input);

               expect(result)
                  .to.deep.include.members(tests[0].expected);
            });

         it("should update the current inventory with the missing " +
            "items", () => {
               const result = inventory(...tests[1].input);

               expect(result)
                  .to.deep.include.members(tests[1].expected);
            });
      });
   });
};
