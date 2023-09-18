/*
Write a function minChange that takes in an amount and an array of coins.
The function should return the minimum number of coins required to create the amount.
You may use each coin as many times as necessary.

If it is not possible to create the amount, then return -1.
*/

const minChange = (amount, coins) => {
  var result = _minChange(amount, coins);

  if (result === Infinity) {
    return -1;
  } else {
    return result;
  }
};

const _minChange = (amount, coins, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount < 0) return Infinity;
  if (amount === 0) return 0;

  var minimum = Infinity;

  for (let coin of coins) {
    var current = 1 + _minChange(amount - coin, coins, memo);
    minimum = Math.min(minimum, current);
  }

  //Were looking for the minimum for each node. what were going to do is add this.
  memo[amount] = minimum;
  return minimum;
};

/*
amount = arg aka 4 aka a
coins = c

Brute Force
- Time Complexity: O(c ^ a)
- Space Complexity: O(a)

Memoize
- Time Complexity: O(c * a) aka multi linear
- Space Complexity: O(a) - we will be storing at most a different keys in our hash and a numbers in recursive stack


*/

minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible
console.log(minChange(13, [1, 9, 5, 14, 30])); // -> 5
console.log(minChange(23, [2, 5, 7])); // -> 4
console.log(minChange(102, [1, 5, 10, 25])); // -> 6
console.log(minChange(200, [1, 5, 10, 25])); // -> 8
console.log(minChange(2017, [4, 2, 10])); // -> -1
console.log(minChange(271, [10, 8, 265, 24])); // -> -1
console.log(minChange(0, [4, 2, 10])); // -> 0
console.log(minChange(0, [])); // -> 0
