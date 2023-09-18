/*
Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column.
In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots.
The function should return a number representing the length of the shortest path from the starting position to a carrot.
You may move up, down, left, or right, but cannot pass through walls (X).
If there is no possible path to a carrot, then return -1.
*/

/*
Approach Overview

You are given a row and a column which essentially is the location of the element.
We want the shortest path to a carrot.

We will be using a queue stack with the root already inside of a set and queue.

iterate

extract from queue.

if C encountered, return its count.

create deltas and iterate through deltas

inside of this second loop, we check if this new delta is out of bounds, a X, or visited

if not, add it to the set with a count increase.

ELSE RETURN -1

*/

const closestCarrot = (grid, row, col) => {
  let queue = [{ row: row, col: col, count: 0 }];

  const visited = new Set([row + "," + col]);

  while (queue.length > 0) {
    const { row, col, count } = queue.pop();

    if (grid[row][col] === "C") {
      return count;
    }

    const deltas = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    for (let delta of deltas) {
      const [rowDelta, colDelta] = delta;

      const newRow = row + rowDelta;
      const newCol = col + colDelta;

      var isItInBounds = inBounds(grid, newRow, newCol); //If true, all in bounds, if not it is false

      var isVisited = visited.has(newRow + "," + newCol);

      if (isItInBounds && grid[newRow][newCol] !== "X" && !isVisited) {
        queue.unshift({ row: newRow, col: newCol, count: count + 1 });
        visited.add(newRow + "," + newCol);
      }
    }
  }
  return -1;
};

const inBounds = (grid, row, col) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;

  return rowInbounds && colInbounds;
};
