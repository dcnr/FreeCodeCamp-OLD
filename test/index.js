// Accepted values:
// basic = basic scripting algorithm tests
// intermediate = intermediate scripting algorithm tests
// all = both basic and intermediate

var test_suite = "all";




/********************** DON'T MODIFY BELOW THIS ***************************/
var basic = "./bonfires/basic-algorithm-scripting/";
var intermediate = "./bonfires/intermediate-algorithm-scripting/";

var basic_suite = [
	require(basic + "02-reverse-a-string-spec"),
	require(basic + "03-factorialize-a-number-spec"),
	require(basic + "04-check-for-palindromes-spec"),
	require(basic + "05-find-the-longest-word-in-a-string-spec"),
	require(basic + "06-title-case-a-sentence-spec"),
	require(basic + "07-return-largest-numbers-in-arrays-spec"),
	require(basic + "08-confirm-the-ending-spec"),
	require(basic + "09-repeat-a-string-repeat-a-string-spec"),
	require(basic + "10-truncate-a-string-spec"),
	require(basic + "11-chunky-monkey-spec"),
	require(basic + "12-slasher-flick-spec"),
	require(basic + "13-mutations-spec"),
	require(basic + "14-falsy-bouncer-spec"),
	require(basic + "15-seek-and-destroy-spec"),
	require(basic + "16-where-do-i-belong-spec")
];

var intermediate_suite = [
	require(intermediate + "01-sum-all-numbers-in-a-range-spec"),
	require(intermediate + "02-diff-two-arrays-spec"),
	require(intermediate + "03-roman-numeral-converter-spec"),
	require(intermediate + "04-where-art-thou-spec"),
	require(intermediate + "05-search-and-replace-spec"),
	require(intermediate + "06-pig-latin-spec"),
	require(intermediate + "07-dna-pairing-spec"),
	require(intermediate + "08-missing-letters-spec"),
	require(intermediate + "09-boo-who-spec"),
	require(intermediate + "10-sorted-union-spec"),
	require(intermediate + "11-convert-html-entities-spec"),
	require(intermediate + "12-spinal-tap-case-spec"),
	require(intermediate + "13-sum-all-odd-fibonacci-numbers-spec"),
	require(intermediate + "14-sum-all-primes-spec"),
	require(intermediate + "15-smallest-common-multiple-spec"),
	require(intermediate + "16-finders-keepers-spec"),
	require(intermediate + "17-drop-it-spec"),
	require(intermediate + "18-steamroller-spec"),
	require(intermediate + "19-binary-agents-spec"),
	require(intermediate + "20-everything-be-true-spec"),
	require(intermediate + "21-arguments-optional-spec")
];

var tests;
switch (test_suite) {
	case 'basic':
		tests = basic_suite;
		break;

	case 'intermediate':
		tests = intermediate_suite;
		break;

	case 'all':
		tests = basic_suite.concat(intermediate_suite);
		break;

	default:
		tests = basic_suite;
}


tests.forEach(
	test => test()
);
