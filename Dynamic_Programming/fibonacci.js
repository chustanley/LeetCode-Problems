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

/*

Time Complex o(2^n) b/c for every increases in input, we nede 2^n extra steps
Space Complex o(n)

After memoization, AS INPUT size increases, the calls increases linearly.

Time Complex: o(N)
Space Complex O(N)
*/

const fibonacci = (n, memo = {}) => {
  //Checking to see if the current fib recursion is inside of memo.
  if (n in memo) return memo[n];

  //If we reach the bottom aka 0 or 1, we return its val.
  if (n === 0) return 0;
  if (n === 1) return 1;

  //Save the result of adding both fibs into the memo of the current fib number
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  //Return the memo that we just added.
  return memo[n];
};

console.log(fibonacci(46)); // -> 1836311903
