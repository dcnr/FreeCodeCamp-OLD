module.exports = [
  {
    input: [[['a']], [['b']]],
    expected: ['a', 'b']
  },
  {
    input: [1, [2], [3, [[4]]]],
    expected: [1, 2, 3, 4]
  },
  {
    input: [1, [], [3, [[4]]]],
    expected: [1, 3, 4]
  },
  {
    input: [1, {}, [3, [[4]]]],
    expected: [1, {}, 3, 4]
  }
];
