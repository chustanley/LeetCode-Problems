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

/*
BRUTE FORCE
- Time: O(sqrt(n)^n)
  SQRT(n) is the loop and the ^n is the length of the tree!
- Space: O(N)


Memoize
Time: o(n*sqrt(N))
Sapce: o(n)
*/

summingSquares(8); // -> 2
summingSquares(9); // -> 1
summingSquares(12); // -> 3
summingSquares(1); // -> 1
summingSquares(50); // -> 2
summingSquares(68); // -> 2
summingSquares(87); // -> 4
