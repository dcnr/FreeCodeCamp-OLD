module.exports = [
  {
    input: 'aab',
    expected: 2
  },
  {
    input: 'aaa',
    expected: 0
  },
  {
    input: 'aabb',
    expected: 8
  },
  {
    input: 'abcdefa',
    expected: 3600
  },
  {
    input: 'abfdefa',
    expected: 2640
  },
  {
    input: 'zzzzzzzz',
    expected: 0
  },
];
