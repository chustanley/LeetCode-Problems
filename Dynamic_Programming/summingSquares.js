/*
Write a function, summingSquares, that takes a target number as an argument.
The function should return the minimum number of perfect squares that sum to the target.
A perfect square is a number of the form (i*i) where i >= 1.
For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.
*/

/*
What is the perfect square?
take every number and multiply it to itself.
1 = 1
2 = 4
3 = 9
4 = 16
5 = 25
6 = 36;
*/
const summingSquares = (n, memo = {}) => {
  if (n in memo) return memo[n];
  // todo
  if (n === 0) {
    return 0;
  }

  var minimum = Infinity;

  for (var i = 1; i <= Math.sqrt(n); i++) {
    var perfectSquare = i * i;
    var currentRoot = 1 + summingSquares(n - perfectSquare, memo);

    minimum = Math.min(currentRoot, minimum);
  }

  memo[n] = minimum;
  return minimum;
};

console.log(summingSquares(4)); // -> 2
