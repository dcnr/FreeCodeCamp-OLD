module.exports = [
  {
    "input": [
      [1, 2, 3, 4],
      function (n) {
        return n >= 3;
      }
    ],
    "expected": [3, 4]
  },

  {
    "input": [
      [0, 1, 0, 1],
      function (n) {
        return n === 1;
      }
    ],
    "expected": [1, 0, 1]
  },

  {
    "input": [
      [1, 2, 3],
      function (n) {
        return n > 0;
      }
    ],
    "expected": [1, 2, 3]
  },

  {
    "input": [
      [1, 2, 3, 4],
      function (n) {
        return n > 5;
      }
    ],
    "expected": []
  },

  {
    "input": [
      [1, 2, 3, 7, 4],
      function (n) {
        return n > 3;
      }
    ],
    "expected": [7, 4]
  },

  {
    "input": [
      [1, 2, 3, 9, 2],
      function (n) {
        return n > 2;
      }
    ],
    "expected": [3, 9, 2]
  }
];
