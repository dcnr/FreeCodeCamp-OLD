module.exports = [
  {
    input: [
      19.50,
      20.00,
      [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0],
       ['QUARTER', 0], ['ONE', 0], ['FIVE', 0],
       ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]
    ],
    expected: 'Insufficient Funds'
  },
  {
    input: [
      19.50,
      20.00,
      [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0],
      ['QUARTER', 0], ['ONE', 0], ['FIVE', 0],
      ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]
    ],
    expected: 'Closed'
  },
  {
    input: [
      19.50,
      20.00,
      [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10],
      ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00],
      ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]
    ],
    expected: [['QUARTER', 0.50]]
  },
  {
    input: [
      3.26,
      100.00,
      [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10],
      ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00],
      ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]
    ],
    expected: [['TWENTY', 60.00], ['TEN', 20.00], ['FIVE', 15],
      ['ONE', 1], ['QUARTER', 0.50], ['DIME', 0.20], ['PENNY', 0.04]]
  }
];
