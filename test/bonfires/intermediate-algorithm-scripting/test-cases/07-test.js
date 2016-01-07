module.exports = [
  {
    input: 'ATCGA',
    expected: [['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C'], ['A', 'T']]
  },
  {
    input: 'TTGAG',
    expected: [['T', 'A'], ['T', 'A'], ['G', 'C'], ['A', 'T'], ['G', 'C']]
  },
  {
    input: 'CTCTA',
    expected: [['C', 'G'], ['T', 'A'], ['C', 'G'], ['T', 'A'], ['A', 'T']]
  }
];
