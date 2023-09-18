/*
Write a function sumPossible that takes in an amount and an array of positive numbers.
The function should return a boolean indicating whether or not it is possible to create the amount by
summing numbers of the array. You may reuse numbers of the array as many times as necessary.
You may assume that the target amount is non-negative.
*/

const sumPossible = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target < 0) return false;
  if (target === 0) return true;

  for (let number of numbers) {
    const possibility = sumPossible(target - number, numbers, memo);

    memo[target - number] = possibility;

    if (possibility === true) return true;
  }
  return false;
};

console.log(sumPossible(2017, [4, 2, 10])); //False
