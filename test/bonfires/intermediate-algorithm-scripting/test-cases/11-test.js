module.exports = [
	{
		"input": "Dolce & Gabbana",
		"expected": "Dolce &amp; Gabbana"
	},
	{
		"input": "Hamburgers < Pizza < Tacos",
		"expected": "Hamburgers &lt; Pizza &lt; Tacos"
	},
	{
		"input": "Sixty > twelve",
		"expected": "Sixty &​gt; twelve"
	},
	{
		"input": 'Stuff in "quotation marks"',
		"expected": "Stuff in &​quot;quotation marks&​quot;"
	},
	{
		"input": "Shindler's List",
		"expected": "Shindler&​apos;s List"
	},
	{
		"input": "<>",
		"expected": "&lt;&gt"
	},
	{
		"input": "abc",
		"expected": "abc"
	},
];
