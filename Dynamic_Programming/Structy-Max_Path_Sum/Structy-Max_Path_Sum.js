/*
Write a function, maxPathSum, that takes in a grid as an argument.
The function should return the maximum sum possible by traveling a path
from the top-left corner to the bottom-right corner. You may only travel through the
grid by moving down or right.

You can assume that all numbers are non-negative.
*/

const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
  const key = r + "," + c;

  if (key in memo) return memo[key];
  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];
  if (r === grid.length || c === grid[0].length) return 0;

  var movingDown = maxPathSum(grid, r + 1, c, memo);
  var movingRight = maxPathSum(grid, r, c + 1, memo);

  var accumulator = grid[r][c] + Math.max(movingRight, movingDown);

  memo[key] = accumulator;
  return accumulator;
};

/*
Brute Force
- Time: O(2^(r+c))
  - base of 2 comes from left or right and the r + c is the length of the tree. for each node.
- Space: O(r + c)

Memoization
- Time: O(r * c) only need to cover r*c positions -> meaning that once we go thorugh it we wont go back!!!
- Space: O(r * c)

// the difference: 2^r+c is because r + c is going to be the length of the tree and 2 is the base of 2 recursive call per node.
*/

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];
maxPathSum(grid); // -> 18
