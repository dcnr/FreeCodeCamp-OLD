module.exports = [
	{
		"input": [
			[1, 3, 5, 8, 9, 10],
			function (num) {
				return num % 2 === 0;
			}
		],
		"expected": 8
	},
	{
		"input": [
			[1, 3, 5, 9],
			function (num) {
				return num % 2 === 0;
			}
		],
		"expected": undefined
	},
];
