/*

Write a function, countingChange, that takes in an amount and an array of coins.
The function should return the number of different ways it is possible
to make change for the given amount using the coins.

You may reuse a coin as many times as necessary.
*/

const countingChange = (amount, coins, i = 0, memo = {}) => {
  const key = amount + "," + i;
  if (key in memo) return memo[key];

  if (amount === 0) return 1;
  if (i === coins.length) return 0;

  const coin = coins[i];

  let count = 0;

  /*
  Eventually when you keep recursing and picking 0 quantity of xyz coin, it will return 0 becuase
  if you pick 0!! QUANTITY of xyz coin, its like picking up nothing for the estimated amount
  */
  for (let qty = 0; qty * coin <= amount; qty += 1) {
    const remainder = amount - coin * qty;
    count += countingChange(remainder, coins, i + 1, memo);
  }

  memo[key] = count;
  return count;
};

countingChange(4, [1, 2, 3]); // -> 4
countingChange(8, [1, 2, 3]); // -> 10
countingChange(24, [5, 7, 3]); // -> 5
countingChange(13, [2, 6, 12, 10]); // -> 0
countingChange(512, [1, 5, 10, 25]); // -> 20119
countingChange(1000, [1, 5, 10, 25]); // -> 142511
countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // -> 1525987916
