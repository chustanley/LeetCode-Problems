/*
Write a function, canConcat, that takes in a string and an array of words as arguments.
The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.
You may reuse words of the array as many times as needed.
*/

const canConcat = (string, words, memo = {}) => {
  if (string in memo) return memo[string];

  if (string.length === 0) return true;

  /*
    Iterate through the words array and only continuously recurse if the string starts with a word.
    When it starts with it, cut it out of it and send it back to recursion.

    if it eventually equals true, return true;

    If it doesnt, itll eventually return false and as you can see, we dont do anything when its false. so itll try all options then fall out of loop eventually
    then return false in the end.
  */
  for (let word of words) {
    if (string.startsWith(word)) {
      const suffix = string.slice(word.length);

      if (canConcat(suffix, words, memo) === true) {
        memo[string] = true;
        return memo[suffix];
      }
    }
  }

  //So, if none of the words fit it, technically, its the whole word that was passed into it as an argument that is false
  memo[string] = false;
  return memo[string];
};
