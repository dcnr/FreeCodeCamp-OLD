module.exports = [
  {
    "input": [
      [{"user": "Tinky-Winky", "sex": "male"},
       {"user": "Dipsy", "sex": "male"},
       {"user": "Laa-Laa", "sex": "female"},
       {"user": "Po", "sex": "female"}],
      "sex"
    ],
    "expected": true
  },
  {
    "input": [
      [{"user": "Tinky-Winky", "sex": "male"},
       {"user": "Dipsy"},
       {"user": "Laa-Laa", "sex": "female"},
       {"user": "Po", "sex": "female"}],
       "sex"
    ],
    "expected": false
  },
  {
    "input": [
      [{"user": "Tinky-Winky", "sex": "male", "age": 0},
       {"user": "Dipsy", "sex": "male", "age": 3},
       {"user": "Laa-Laa", "sex": "female", "age": 5},
       {"user": "Po", "sex": "female", "age": 4}],
      "age"
    ],
    "expected": false
  },
  {
    "input": [
      [{"name": "Pete", "onBoat": true},
       {"name": "Repeat", "onBoat": true},
       {"name": "FastFoward", "onBoat": null}],
      "onBoat"
    ],
    "expected": false
  },
  {
    "input": [
      [{"name": "Pete", "onBoat": true},
       {"name": "Repeat", "onBoat": true, "alias": "Repete"},
       {"name": "FastFoward", "onBoat": true}],
      "onBoat"
    ],
    "expected": true
  },
  {
    "input": [
      [{"single": "yes"}],
      "single"
    ],
    "expected": true
  },
  {
    "input": [
      [{"single": ""},
       {"single": "double"}],
      "single"
    ],
    "expected": false
  },
  {
    "input": [
      [{"single": "double"},
       {"single": undefined}],
      "single"
    ] ,
    "expected": false
  },
  {
    "input": [
      [{"single": "double"},
       {"single": NaN}],
      "single"
    ],
    "expected": false
  },
];
