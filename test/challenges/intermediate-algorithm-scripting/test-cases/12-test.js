module.exports = [
  {
    input: 'This Is Spinal Tap',
    expected: 'this-is-spinal-tap'
  },
  {
    input: 'thisIsSpinalTap',
    expected: 'this-is-spinal-tap'
  },
  {
    input: 'The_Andy_Griffith_Show',
    expected: 'the-andy-griffith-show'
  },
  {
    input: 'Teletubbies say Eh-oh',
    expected: 'teletubbies-say-eh-oh'
  }
];
