/*
Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X'
represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls.
The function should return the number of ways possible to travel from the top-left corner of the grid
to the bottom-right corner.
*/

const countPaths = (grid, r = 0, c = 0, memo = {}) => {
  const key = r + "," + c;

  if (key in memo) return memo[key];
  if (r === grid.length - 1 && c === grid[0].length) return 1;
  if (r === grid.length || c === grid[0].length || grid[r][c] === "X") return 0; // return??

  const moveRight = countPaths(grid, r, c + 1, memo);
  const moveDown = countPaths(grid, r + 1, c, memo);

  memo[key] = moveRight + moveDown;

  return moveRight + moveDown;
};

/*
Brute Force

Time Complexity: O(2^(r + c))
- The reason why its r + c because the height of the recursive
  tree is R + C and for every node you have to make 2 recursive calls

Space complexity: O(r + c)
- The reason why is because were making r + c calls (stack depth)

Memoization

Time: O(R * C): number of recursive calls to be made and it would be r * c
-
Space: O(R * C)
-


*/

const grid = [
  ["O", "O", "X", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "X"],
  ["X", "O", "O", "O", "O", "O"],
  ["X", "X", "X", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "X"],
];
console.log(countPaths(grid));
