// NICKEL = 5 PENNY
// DIME = 2 NICKEL or 10 PENNY
module.exports = [
	{
		"input": [
			19.50,
      20.00,
			[["PENNY", 0.01], ["NICKEL", 0],
			 ["DIME", 0], ["QUARTER", 0],
			 ["ONE", 0], ["FIVE", 0],
			 ["TEN", 0], ["TWENTY", 0],
			 ["ONE HUNDRED", 0]]
		],
		"expected": "Insufficient Funds"
	},
];
