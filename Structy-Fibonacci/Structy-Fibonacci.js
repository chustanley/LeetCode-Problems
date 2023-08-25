const fibSlow = (n) => {
  if (n === 1 || n === 0) return n;

  return fibSlow(n - 1) + fibSlow(n - 2);
};
/*
Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21
    index: 0, 1, 2, 3, 4, 5, 6, 7, 8


Time Complexity: O(2^n) - Expotential Time
  - The reason why its O(n) is because when you actually draw out the tree, you will see REPEAT.
  - These repeat nodes will have the same value as in the 3rd node will always return.. 2 in fib.
  - Instead of recursing again on a node that we have previously incurred before, we memoize it and send it back
    which will reduce the time complexity
  - Recursion depends on the nodes(every node is a recursive call) which will dramatically affect time complexity
  - Reminder: BIG O is just an estimate. Not the accuracy.

Space Complexity: O(n)
  - Space in recursive code depends on the stack frame of the code.
  - The reason why its O(n) is becuase regardless of your number, your stack will almost be as equivalent as your input.
  - Try drawing it out, youll see
*/

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n === 1 || n === 0) return n;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
/*
Time Complexity: O(n)
  - The reason why its O(n) is becuase if you increase your input, the node increases by 2. Constantly.
  - if increaseing it increased the nodes by more than this the time complexity would be different.

Space Complexity: O(n)
  - Yes you might be thinking that adding a hash data structure will increase the space but remember the rules of time and space
  - Its not about how many objects you have but how many times you store one input within the object
  - example: 3 will only be memoized ONCE. and the callstack for recursion will only have a max of the input number!
*/

console.log(fib(0)); // -> 0
fib(1); // -> 1
fib(2); // -> 1
fib(3); // -> 2
fib(4); // -> 3
fib(5); // -> 5
fib(35); // -> 9227465
fib(46); // -> 1836311903
