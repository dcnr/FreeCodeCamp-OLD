module.exports = [
  {
    input: [[1, 3, 2], [5, 2, 1, 4], [2, 1]],
    expected: [1, 3, 2, 5, 4]
  },
  {
    input: [[1, 3, 2], [1, [5]], [2, [4]]],
    expected: [1, 3, 2, [5], [4]]
  },
  {
    input: [[1, 2, 3], [5, 2, 1]],
    expected: [1, 2, 3, 5]
  },
  {
    input: [[1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]],
    expected: [1, 2, 3, 5, 4, 6, 7, 8]
  }
];
