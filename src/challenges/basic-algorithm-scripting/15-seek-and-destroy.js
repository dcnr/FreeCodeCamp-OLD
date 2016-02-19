/*
 * Bonfire: Seek and Destroy
 * http://www.freecodecamp.com/challenges/bonfire-seek-and-destroy
 *
 * You will be provided with an initial array
 * (the first argument in the destroyer function), followed by
 * one or more arguments. Remove all elements from the initial array
 * that are of the same value as these arguments.
 *
 */


function destroyer(arr) {
  'use strict';

  const args = arguments.length === 1
    ? [arguments[0]]
    : Array.apply(null, arguments);

  arr = arr.filter(val => !~args.indexOf(val));

  return arr;
}


/* exports */
module.exports = destroyer;
