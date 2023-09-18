/*
Write a function, canConcat, that takes in a string and an array of words as arguments.
The function should return boolean indicating whether or not it is possible to concatenate
words of the array together to form the string.

You may reuse words of the array as many times as needed.
*/

const canConcat = (s, words, memo = {}) => {
  /*
  for every s word, we want to find the start with for it.
  */

  if (s in memo) return memo[s];
  if (s.length === 0) return true;

  for (var key of words) {
    if (s.startsWith(key)) {
      if (canConcat(s.slice(key.length), words, memo) === true) {
        memo[s] = true;
        return memo[s];
      }
    }
  }

  memo[s] = false;
  return memo[s];
};

console.log(canConcat("oneisnone", ["on", "e", "is"]));
