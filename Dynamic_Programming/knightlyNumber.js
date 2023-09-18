/*
A knight is on a chess board. Can you figure out the total number of ways the knight can move to a target position in
exactly m moves? On a single move, the knight can move in an "L" shape; two spaces in any direction,
then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions
it can move to.

Write a function, knightlyNumber, that takes in 6 arguments:

n, m, kr, kc, pr, pc

n = the length of the chess board
m = the number of moves that must be used
kr = the starting row of the knight
kc = the starting column of the knight
pr = the target row
pc = the target column
The function should return the number of different ways the knight can move to the target in exactly m moves.
The knight can revisit positions of the board if needed. The knight cannot move out-of-bounds of the board.
You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7.
*/

/*
Approach: What are the amount of unique moves that we can take to get to where the pond is in exactly M moves

*/

const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
  //Rules with memoization, we usually should add the keys that change overtime which in our case is m, kr, and kc.
  //This is because you may always have / hit the same kr/kc HOWEVER, we are looking for the unique moves that we can take to get
  //to our pond.

  /*
  All in all, lets say our KR and KC is 4,4

  we could have taken 6 steps before that, 2 steps before that, 9 steps before that.

  if we return a memoization of just kr and kc = 0, it wont make sense because we have to consider how many moves we took ALREADY
  at the specific location.
  */
  const knightLocation = m + "," + kr + "," + kc;
  if (knightLocation in memo) return memo[knightLocation];

  //if out of bounds, do this.
  if (kr >= n || kc >= n || kc < 0 || kr < 0) return 0;

  //If min moves all used, and we are at the target, return 1 and if not return 0
  if (m === 0) {
    if (kr === pr && kc === pc) {
      return 1;
    } else {
      return 0;
    }
  }

  //All the L moves the 9 moves a knight can move.
  const neighbors = [
    [kr + 2, kc + 1],
    [kr - 2, kc + 1],
    [kr + 2, kc - 1],
    [kr - 2, kc - 1],
    [kr + 1, kc + 2],
    [kr - 1, kc + 2],
    [kr + 1, kc - 2],
    [kr - 1, kc - 2],
  ];

  let count = 0;

  for (let neighbor of neighbors) {
    const [newKr, newKc] = neighbor;

    count += knightlyNumber(n, m - 1, newKr, newKc, pr, pc, memo);
  }

  memo[knightLocation] = count;
  return memo[knightLocation];
};

console.log(knightlyNumber(20, 12, 8, 3, 9, 14)); // -> 98410127
