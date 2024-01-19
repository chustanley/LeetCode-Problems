/*
Write a function,countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces.
You may only move down or to the right and cannot pass through walls.
The function should return the number of ways possible to travel from the top-left
corner of the grid to the bottom-right corner.
*/

const countPaths = (grid, r = 0, c = 0, memo = {}) => {
  const location = r + "," + c;

  if (location in memo) return memo[location];

  //If out of bounds or hit a X, return 0
  if (r === grid.length || c === grid[0].length || grid[r][c] === "X") return 0;

  //If we hit the target, return 1
  if (r === grid.length - 1 && c === grid[0].length - 1) return 1;

  //wE ADD THESE TOGETHER and save it then return it so the total can accumulate up the tree
  const moveRight = countPaths(grid, r, c + 1, memo);
  const moveDown = countPaths(grid, r + 1, c, memo);

  //Saving the steps acquired to the specific location to show that in that location, its x steps to go towards the corner
  memo[location] = moveRight + moveDown;
  return memo[location];
};

const grid = [
  ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
  ["X", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
];
console.log(countPaths(grid)); // -> 3190434
