/*
Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.
The 0-th number of the sequence is 0.
The 1-st number of the sequence is 1.
To generate further numbers of the sequence, calculate the sum of previous two numbers.
Solve this recursively.
*/

/*
Index    0   1   2   3   4   5
Fib      0   1   1   2   3   5
*/

/*
Look at the drawing on your ipad, the science behind fibonacci makes sense but in order to speed up the time complexity
we can use memoization
*/

const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

console.log(fibonacci(46)); // -> 1836311903
