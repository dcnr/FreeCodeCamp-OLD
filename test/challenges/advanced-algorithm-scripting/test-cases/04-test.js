module.exports = [
  {
    input: [
         [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'],
          [5, 'Microphone']],

         [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'],
          [67, 'Bowling Ball'], [7, 'Toothpaste']]
      ],
    expected: [
      [3, 'Half-Eaten Apple'], [7, 'Toothpaste'],
      [67, 'Bowling Ball'], [2, 'Hair Pin']
    ]
  },
  {
    input: [
         [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'],
          [5, 'Microphone']],
         [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'],
          [7, 'Toothpaste']]
      ],
    expected: [
         [88, 'Bowling Ball'], [2, 'Dirty Sock'], [3, 'Hair Pin'],
         [3, 'Half-Eaten Apple'], [5, 'Microphone'], [7, 'Toothpaste']
      ]
  },
];
