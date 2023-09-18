/*
Write a function, maxPalinSubsequence, that takes in a string as an argument.
The function should return the length of the longest subsequence of the string that is also a palindrome.

A subsequence of a string can be created by deleting any characters of the string,
while maintaining the relative order of characters.
*/

const maxPalinSubsequence = function (
  str,
  i = 0,
  j = str.length - 1,
  memo = {},
) {
  const key = i + "," + j;
  if (key in memo) return memo[key];

  if (i === j) return 1;

  //This gets activated when you dont have any possibilities of palindromes.
  /*
This gets activated when you pass in 'xx' into line 24. what this will then do is
if 'xx' is the arg, it has index 0 and 1 and if you pass it into here, you want to keep the nature of 2 by adding 0
so then itll be 2 + palindrome(0 + 1, 1 - 1) which means 1,0 which means 1 > 0
  */
  if (i > j) return 0;

  if (str[i] === str[j]) {
    memo[key] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
  } else {
    memo[key] = Math.max(
      maxPalinSubsequence(str, i + 1, j, memo),
      maxPalinSubsequence(str, i, j - 1, memo),
    );
  }

  return memo[key];
};

console.log(maxPalinSubsequence("az"));

maxPalinSubsequence("luwxult"); // -> 5
maxPalinSubsequence("xyzaxxzy"); // -> 6
maxPalinSubsequence("lol"); // -> 3
maxPalinSubsequence("boabcdefop"); // -> 3
maxPalinSubsequence("chartreusepugvicefree"); // -> 7
maxPalinSubsequence("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty"); // -> 15
