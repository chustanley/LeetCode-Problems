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
  //Add current location to the queue
  let queue = [{ row: row, col: col, count: 0 }];

  //Save current location to the new set so no repeats
  const visited = new Set([row + "," + col]);

  //Iterate through the queue, current location
  while (queue.length > 0) {
    const { row, col, count } = queue.pop();

    //If we find the carrot return the count
    if (grid[row][col] === "C") return count;

    //This is up down left right
    const deltas = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    //Iterate through the movements
    for (let delta of deltas) {
      const [rowDelta, colDelta] = delta;

      //Create potential movements
      const newRow = row + rowDelta;
      const newCol = col + colDelta;

      //If potential movement is within bounds
      var isItInBounds = inBounds(grid, newRow, newCol); //If true, all in bounds, if not it is false

      //If visited DOESNT have potential movement
      var isVisited = visited.has(newRow + "," + newCol);

      //If all above PASSES + 'NOT a X'
      if (isItInBounds && grid[newRow][newCol] !== "X" && !isVisited) {
        //We add the new location ONTO the queue!
        queue.unshift({ row: newRow, col: newCol, count: count + 1 });
        //Since we add it onto the queue that means that we ENCOUNTERED IT already so we just add it to the set
        //So that we dont repeat
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
