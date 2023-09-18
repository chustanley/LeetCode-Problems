/*
Write a function, bestBridge, that takes in a grid as an argument.
The grid contains water (W) and land (L).
There are exactly two islands in the grid.
An island is a vertically or horizontally connected region of land.
Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.
*/

/*
1. Find the first island and then from there, do a breadth first search and find the closest island other than the one itself.
2. Count distance.
*/

const bestBridge = (grid) => {
  let mainIsland;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "L") {
        var current = traverse(grid, r, c, new Set());

        if (current.size > 0) {
          mainIsland = current;
          break;
        }
      }
    }
  }

  /*
  Make a copy of the main island set into another set.

  we will check to make sure that the current Index is

*/
  const visited = new Set(mainIsland);
  const queue = [];
  for (let pos of mainIsland) {
    const [row, col] = pos.split(",").map(Number);
    queue.push([row, col, 0]);
  }

  while (queue.length !== 0) {
    const [row, col, distance] = queue.shift();

    const position = row + "," + col;

    //If the current location is a piece of land and it ISNT inside of the main island set, return the distance.
    /*
    The reason why we have 2 sets is this keeps track of the current LOCATION and how IT IS NOT IN THE ORIGINAL ISLAND
    we have another set which we used the original set to make a copy because
    - we are going to add every piece of data in there and then add it to the queue with a + 1 in the distance.
    if the item is INBOUNDS and NOT in the visited set, we keep adding + 1.

    evenetually when we keep spreading, we will encounter another island which we added  distance to so we just return it.
    */
    if (grid[row][col] === "L" && !mainIsland.has(position)) {
      return distance - 1;
    }

    const deltas = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighborPos = neighborRow + "," + neighborCol;

      //If the deltas are INBOUNDS and it has NOT been visited, add it to the set and then push it to queue.
      if (
        isInbounds(grid, neighborRow, neighborCol) &&
        !visited.has(neighborPos)
      ) {
        visited.add(neighborPos);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
};

const isInbounds = (grid, row, col) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  return rowInbounds && colInbounds;
};

const traverse = (grid, row, col, visited) => {
  const currentPosition = row + "," + col;

  const inGrid = isInbounds(grid, row, col);

  //If it is not within the grid, or the location is equal to water or if the set has the position already, return visited.
  //Returning visited doesnt do anything within the function but it does affect the root function by returning a empty set.
  if (!inGrid || grid[row][col] === "W" || visited.has(currentPosition))
    return visited;

  visited.add(currentPosition);

  traverse(grid, row - 1, col, visited);
  traverse(grid, row + 1, col, visited);
  traverse(grid, row, col - 1, visited);
  traverse(grid, row, col + 1, visited);

  return visited;
};

const grid = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
console.log(bestBridge(grid)); // -> 1
