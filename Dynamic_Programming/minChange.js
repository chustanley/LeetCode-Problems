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
  /*
  If in memo, return it
  If we get a negative number, return Infinity to keep it Infinity.
  If amount === 0; return 0 which means that we hit the end perfectly.
  */
  if (amount in memo) return memo[amount];
  if (amount < 0) return Infinity;
  if (amount === 0) return 0;

  let minimum = Infinity;

  //This goes through every single coin and subtracts the amount to that specific coin to FIND the MINIMUM amount of change!!!
  for (let coin of coins) {
    //If negative itll return Infinity + 1
    //If 0 meaning that no more change, return 0 plus the 1
    const possibility = 1 + _minChange(amount - coin, coins, memo);

    //We assigning minimum to whatever is the most minimum of minimum and possibility
    minimum = Math.min(possibility, minimum);
  }

  //what you did before: have memo[amount - coin] = minimum inside of the loop

  //In all honesty, instead of doing all that saving work, why not add the final result for minimum into the memo[AMOUNT] that was
  // passed to the function to begin with.
  memo[amount] = minimum;

  return memo[amount];
};

console.log(minChange(13, [1, 9, 5, 14, 30])); //5
