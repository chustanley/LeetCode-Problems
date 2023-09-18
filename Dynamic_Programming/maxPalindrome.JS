/*
Write a function, maxPalinSubsequence, that takes in a string as an argument.
The function should return the length of the longest subsequence of the string that is also a palindrome.
A subsequence of a string can be created by deleting any characters of the string,
while maintaining the relative order of characters.
*/

const maxPalinSubsequence = (
  string,
  start = 0,
  end = string.length - 1,
  memo = {},
) => {
  const key = i + "," + j;

  if (key in memo) return memo[key];

  //We are only looking at one string. one letter. Every character by itself is a palindrome.
  if (start === end) return 1;

  //We return 0 because in our special case for if we find 2 matching letters in the end, we will cut them.
  /*
  lets say we were previously given 'BB' itll go into line 22 and we minus both which will lead to start being greater than end
  */
  if (start > end) return 0;

  if (string[start] === string[end]) {
    //This is because we acknowledged that there is already 2 of the same in the end already.
    //We remove them and consider it into our memo. then we reiterate with new pointers for both side
    memo[key] = 2 + maxPalinSubsequence(string, start + 1, end - 1, memo);
  } else {
    //If they dont equal the same, we should remove one in one call and the end in another call to see which one will result in
    //a new match.

    /*
    Technically what will happen is that if it doesnt keep matching. eventually line 14 will catch it and return 1.

    we only want to return 1 here becuase math.max of both 1 and 1 will return 1.

    1 will not be returned in line 24, it will always return 0 and if its 'ABA'

    it will enter 2 in line 24, then enter here which we will return 1. so its 3 for aba which is a palindrome.
    */
    memo[key] = Math.max(
      maxPalinSubsequence(string, start + 1, end, memo),
      maxPalinSubsequence(string, start, end - 1, memo),
    );
  }

  return memo[key];
};
