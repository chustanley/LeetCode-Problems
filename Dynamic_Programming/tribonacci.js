/*
Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.
The 0-th and 1-st numbers of the sequence are both 0.
The 2-nd number of the sequence is 1.
To generate further numbers of the sequence, calculate the sum of previous three numbers.
Solve this recursively.
*/

/*

Index: 0  1  2  3  4  5  6  7
Trib:  0  0  1  1  2  3  5  8

*/

const tribonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 1 || n === 0) return 0;
  if (n === 2) return 1;

  memo[n] =
    tribonacci(n - 3, memo) + tribonacci(n - 2, memo) + tribonacci(n - 1, memo);
  return memo[n];
};

console.log(tribonacci(37)); // -> 1132436852
