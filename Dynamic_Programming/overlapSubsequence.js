/*
Write a function, overlapSubsequence, that takes in two strings as arguments.
The function should return the length of the longest overlapping subsequence.
A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
*/

/*
Approach:


*/

const overlapSubsequence = (string1, string2, i = 0, j = 0, memo = {}) => {
  const key = i + "," + j;

  if (key in memo) return memo[key];

  if (i === string1.length || j === string2.length) return 0;

  if (string1[i] === string2[j]) {
    memo[key] = 1 + overlapSubsequence(string1, string2, i + 1, j + 1, memo);
  } else {
    /*
    This is the confusing one so lets explain it

    lets say we have..

    string1: AT
    string2: T

    they arent equal so theyll enter here. eventually the first recursive call will lead to TT which will result in 1 + 0 = 1
    the second recursive call will result to AT and the string2 being empty. meaning that no matches found. = 0

    memo[key] = Math.max(1, 0)
    */
    memo[key] = Math.max(
      overlapSubsequence(string1, string2, i + 1, j, memo),
      overlapSubsequence(string1, string2, i, j + 1, memo),
    );
  }

  return memo[key];
};
