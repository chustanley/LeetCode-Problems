/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls.
W represents water and L represents land.
The function should return the size of the smallest island.
An island is a vertically or horizontally connected region of land.
You may assume that the grid contains at least one island.
*/

/*
Approach Overview
This is the same, you loop through the graph, recursively call an external func with a set

inside recursive func, have every step ( up down left right) add a result to the current stacks size.

if it is out of bounds, set already contains or you see a wall, return 0.

in the end return the size

A LOT OF NOTES INSIDE OF THE ISLAND COUNT

*/

const minimumIsland = (grid) => {
  const visited = new Set();
  let minimum = Infinity;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const currentIsland = explore(grid, r, c, visited);

      if (currentIsland < minimum && currentIsland !== 0)
        minimum = currentIsland;
    }
  }

  return minimum;
};

const explore = (grid, r, c, visited) => {
  let count = 0;
  const islandTag = r + ", " + c;

  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return count;

  if (visited.has(islandTag)) return count;
  if (grid[r][c] === "W") return count;

  count++;

  visited.add(islandTag);

  count += explore(grid, r + 1, c, visited);
  count += explore(grid, r - 1, c, visited);
  count += explore(grid, r, c + 1, visited);
  count += explore(grid, r, c - 1, visited);

  return count;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid)); // -> 2
