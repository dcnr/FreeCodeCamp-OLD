module.exports = [
  {
    input: true,
    expected: true
  },
  {
    input: false,
    expected: true
  },
  {
    input: [1, 2, 3],
    expected: false
  },
  {
    input: [].slice,
    expected: false
  },
  {
    input: {
      'a': 1
    },
    expected: false
  },
  {
    input: 1,
    expected: false
  },
  {
    input: NaN,
    expected: false
  },
  {
    input: 'a',
    expected: false
  }
];
