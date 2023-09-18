/*
Write a function, maxPathSum, that takes in a grid as an argument.
The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner.
You may only travel through the grid by moving down or right.
You can assume that all numbers are non-negative.
*/

/*
Stanley's Approach

We can only move left and down.

everytime we iterate to the left or right, we want the max. how should we do this?

*/

const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
  const location = r + "," + c;

  if (location in memo) return memo[location];
  if (r === grid.length || c === grid[0].length) return 0;

  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];

  const moveLeft = maxPathSum(grid, r, c + 1, memo);
  const moveDown = maxPathSum(grid, r + 1, c, memo);

  const addition = grid[r][c] + Math.max(moveLeft, moveDown);

  memo[location] = addition;
  return memo[location];
};

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];
console.log(maxPathSum(grid)); // -> 18
