const tribonacciSlow = (n) => {
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;

  return tribonacciSlow(n - 3) + tribonacciSlow(n - 2) + tribonacciSlow(n - 1);
};

// Tribonacci Sequence: 0, 0, 1, 1, 2, 4, 7, 13, 24
//               index: 0, 1, 2, 3, 4, 5, 6, 7, 8

/*
Time Complexity: O(3 ^n)
- This is because for every level were making 3 recursive calls. not 2 like in fibonacci.
- Therefore, the complexity is 3x the node (dont think of it literally but in terms of levels.)
Space Complexity: O(n)

*/

const tribonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;

  memo[n] =
    tribonacci(n - 3, memo) + tribonacci(n - 2, memo) + tribonacci(n - 1, memo);
  return memo[n];
};

/*
Time Complexity: O(n)
Space Complexity: O(n)

*/

tribonacci(0); // -> 0
tribonacci(1); // -> 0
tribonacci(2); // -> 1
tribonacci(5); // -> 4
tribonacci(7); // -> 13
tribonacci(14); // -> 927
tribonacci(20); // -> 35890
tribonacci(37); // -> 1132436852
