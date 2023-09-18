/*
Write a function, quickestConcat, that takes in a string and an array of words as arguments.
The function should return the minimum number of words needed to build the string by concatenating words of the array.
You may use words of the array as many times as needed.
*/

const quickestConcat = (string, words) => {
  //Root and external function is needed to simplify the process
  //However, you could tag the function and work with one to only return -1 at infinity at the very first stack.
  var result = _quickestConcat(string, words);

  if (result === Infinity) {
    return -1;
  } else {
    return result;
  }
};

const _quickestConcat = (string, words, memo = {}) => {
  if (string in memo) return memo[string];

  if (string.length === 0) return 0;

  var minimum = Infinity;

  for (let word of words) {
    /*
    ONLY continue, IF one of the word in words match the beginning. if it doesnt, then our string will = Infinity.
    However, if it does start with it but the next one doesnt, whats going to happen is you will still call into attempt but it will
    return an Infinity and the entire string will be labeled Infinity if a match isnt found.

    */
    if (string.startsWith(word)) {
      const suffix = string.slice(word.length);

      const attempt = 1 + _quickestConcat(suffix, words, memo);

      minimum = Math.min(minimum, attempt);
    }
  }

  memo[string] = minimum;
  return minimum;
};

console.log(
  quickestConcat("respondorreact", ["re", "or", "spond", "act", "respond"]),
); // -> 4
