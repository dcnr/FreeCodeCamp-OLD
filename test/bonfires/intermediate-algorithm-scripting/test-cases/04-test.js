module.exports = [
  { // case one
    input: [
      [
        {
          first: 'Romeo',
          last: 'Montague'
        },
        {
          first: 'Mercutio',
          last: null
        },
        {
          first: 'Tybalt',
          last: 'Capulet'
        }
      ],
      {
        last: 'Capulet'
      }
    ],
    expected: [
      {
        first: 'Tybalt',
        last: 'Capulet'
      }
    ]
  }, // end case one

  { // case two
    input: [
      [
        {
          'a': 1
        },
        {
          'a': 1
        },
        {
          'a': 1,
          'b': 2
        }
      ],
      {
        'a': 1
      }
    ],
    expected: [
      {
        'a': 1
      },
      {
        'a': 1
      },
      {
        'a': 1,
        'b': 2
      }
    ]
  }, // end case two

  { // case three
    input: [
      [
        {
          'a': 1,
          'b': 2
        },
        {
          'a': 1
        },
        {
          'a': 1,
          'b': 2,
          'c': 2
        }
      ],
      {
        'a': 1,
        'b': 2
      }
    ],
    expected: [
      {
        'a': 1,
        'b': 2
      },
      {
        'a': 1,
        'b': 2,
        'c': 2
      }
    ]
  }, // end case three

  { // case four
    input: [
      [
        {
          'a': 1,
          'b': 2
        },
        {
          'a': 1
        },
        {
          'a': 1,
          'b': 2,
          'c': 2
        }
      ],
      {
        'a': 1,
        'c': 2
      }
    ],
    expected: [
      {
        'a': 1,
        'b': 2,
        'c': 2
      }
    ]
  } // end case four
];
