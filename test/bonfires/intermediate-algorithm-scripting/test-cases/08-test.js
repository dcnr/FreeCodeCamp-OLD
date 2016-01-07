module.exports = [
  {
    input: 'abce',
    expected: 'd'
  },
  {
    input: 'abcdefghjklmno',
    expected: 'i'
  },
  {
    input: 'bcd',
    expected: undefined
  },
  {
    input: 'yz',
    expected: undefined
  }
];
