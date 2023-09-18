/*
Write a function minChange that takes in an amount and an array of coins.
The function should return the minimum number of coins required to create the amount.
You may use each coin as many times as necessary.
If it is not possible to create the amount, then return -1.
*/

const minChange = (amount, coins, memo = {}) => {
  var result = _minChange(amount, coins, memo);

  if (result === Infinity) {
    return -1;
  } else {
    return result;
  }
};

const _minChange = (amount, coins, memo) => {
  if (amount in memo) return memo[amount];

  if (amount < 0) return Infinity;

  if (amount === 0) return 0;

  let minimum = Infinity;

  for (let coin of coins) {
    const possibility = 1 + _minChange(amount - coin, coins, memo);

    minimum = Math.min(possibility, minimum);
  }

  //what you did before: have memo[amount - coin] = minimum inside of the loop

  //In all honesty, instead of doing all that saving work, why not add the final result for minimum into the memo[AMOUNT] that was
  // passed to the function to begin with.
  memo[amount] = minimum;

  return memo[amount];
};

console.log(minChange(13, [1, 9, 5, 14, 30])); //5
