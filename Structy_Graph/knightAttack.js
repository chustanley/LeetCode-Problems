/*
A knight and a pawn are on a chess board. Can you figure out the minimum number of moves required for the knight to travel
 to the same position of the pawn? On a single move, the knight can move in an "L" shape; two spaces in any direction,
 then one space in a perpendicular direction.
This means that on a single move, a knight has eight possible positions it can move to.

Write a function, knightAttack, that takes in 5 arguments:

n, kr, kc, pr, pc

n = the length of the chess board
kr = the starting row of the knight
kc = the starting column of the knight
pr = the row of the pawn
pc = the column of the pawn
The function should return a number representing the minimum number of moves required for the knight to land
ontop of the pawn. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed.
This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight to attack the pawn,
 then return null.
*/

const knightAttack = (n, kr, kc, pr, pc) => {
  const visited = new Set();

  //set doesnt need the step included we just want the location
  visited.add(kr + "," + kc);

  //QUEUE needs step because we need to analyze through every while interation
  const queue = [[kr, kc, 0]];

  while (queue.length > 0) {
    const [r, c, step] = queue.shift();

    //When you come across a piece that is equal to the target in the queue. return the step from the queue.
    if (r === pr && c === pc) {
      return step;
    }

    //Recieve all neighbors that are inbounds from the 8 moves
    const neighbors = getKnightMoves(n, r, c);

    //Within those neighbors, check if you have already visited them and IF you didnt...
    //add them into the set and push them into the queue with a incrementation in step.
    for (let neighbor of neighbors) {
      const [neighborRow, neighborCol] = neighbor;
      const neighborKey = neighborRow + "," + neighborCol;
      if (!visited.has(neighborKey)) {
        visited.add(neighborKey);
        queue.push([neighborRow, neighborCol, step + 1]);
      }
    }
  }
  //If all goes to shit, return null
  return null;
};

/*
Given a position for the knight, give all 8 possible moves inside an array.
- There are 8 possible moves. With those 8 possible moves, give me the ones that are INBOUNDS
*/
const getKnightMoves = (n, r, c) => {
  const positions = [
    [r + 2, c + 1],
    [r - 2, c + 1],
    [r + 2, c - 1],
    [r - 2, c - 1],
    [r + 1, c + 2],
    [r - 1, c + 2],
    [r + 1, c - 2],
    [r - 1, c - 2],
  ];

  const inboundsPositions = [];
  for (let pos of positions) {
    const [newRow, newCol] = pos;
    if (0 <= newRow && newRow < n && 0 <= newCol && newCol < n) {
      inboundsPositions.push(pos);
    }
  }

  return inboundsPositions;
};

console.log(knightAttack(8, 1, 1, 2, 2)); // -> 2
