/*
Write a function, islandCount, that takes in a grid containing Ws and Ls.
W represents water and L represents land.
The function should return the number of islands on the grid.
An island is a vertically or horizontally connected region of land.
*/

/*
Iterate through every possible element in the nested array. (make sure loop condition is correct)
recursively call func on every element

recursivefunc
- if out of bounds return false,
- if it is w, return false,
- if visited, return false,

then add it to the set

recursively call up down left and right to check for land.
(eventually, we will go through every surrounding nodes. and it will then return true!

  the reason why we return true is because if it were...


  out of bounds, a W or the set has it (meaning we have already viewed and considered the land)

  WE WOULD HAVE RETURNED FALSE! and remember the root function goes through EVERY element in the nested nested array

  Meaning that it would do a full recursive call if we ONLY reach a new island that we havent touched
  becuase the recursive func would return false if it was ANYTHING but a new island!
)
*/

const islandCount = (grid) => {
  var visited = new Set();
  var count = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }
  return count;
};

const explore = (grid, r, c, visited) => {
  //This is important because we are running recursion and will at times force the r and c to be out of scope
  //Becuase it will be out of scope, we dont want to possibly include that.
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  //If we are at water
  //This is important to have after line 45 and 46 because if your out of bounds and you go into here
  //You will be trying to get [r][c] out of a undefined area
  if (grid[r][c] === "W") return false;

  //Cycle prevention logic
  const position = r + "," + c;
  if (visited.has(position)) return false;

  //If it is in bounds, not a W and it is NOT inside of visited. Add it and recurse
  visited.add(position);

  //Try to not LOOK before you leap. just do it and make it get caught by the base case above.
  //Reason: you will end up writing repetitive code.
  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  //We allow the line 60-63 to keep recursing and saving into our set.
  //Return true to decide on what to do if T AND F
  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid)); // -> 3
