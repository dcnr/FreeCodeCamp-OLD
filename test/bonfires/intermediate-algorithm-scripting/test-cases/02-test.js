module.exports = [
  {
    input: [[1, 2, 3, 5], [1, 2, 3, 4, 5]],
    expected: [4]
  },
  {
    input: [
      ["diorite", "andesite", "grass", "dirt", "pink wool",
        "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    ],
    expected: ["pink wool"]
  },
  {
    input: [
      ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    ],
    expected: ["diorite", "pink wool"]
  },
  {
    input: [
      ["andesite", "grass", "dirt", "dead shrub"],
      ["andesite", "grass", "dirt", "dead shrub"]
    ],
    expected: []
  },
  {
    input: [[1, "calf", 3, "piglet"], [1, "calf", 3, 4]],
    expected: ["piglet", 4]
  },
  {
    input: [[], ["snuffleupagus", "cookie monster", "elmo"]],
    expected: ["snuffleupagus", "cookie monster", "elmo"]
  },
  {
    input: [[1, "calf", 3, "piglet"], [7, "filly"]],
    expected: [1, "calf", 3, "piglet", 7, "filly"]
  }
];
