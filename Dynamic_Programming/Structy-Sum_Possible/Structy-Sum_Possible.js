/*
Write a function sumPossible that takes in an amount and an array of positive numbers.
The function should return a boolean indicating whether or not it is possible to create
the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.
*/

/*
How to solve:
 - recognizing they are trying to find out if this array is.. sum possible. we have to understand that the opposite of adding
 is subtracting. We can iterate the numbers array and recurse saying the numbers[i] - amount until it reaches 0
 When it reaches 0 we can return true and if it passes 0 -> going negative we need to return false.

 -We can apply memoization so it doesnt repeat recursion on values that we already gathered the value for
*/

const sumPossibleSlow = (amount, numbers) => {
  // todo

  if (amount < 0) return false;
  if (amount === 0) return true;

  for (let number of numbers) {
    var possible = sumPossibleSlow(amount - number, numbers);
    return true;
  }

  return false;
};

/*
Brute Force Time Complexity
a = amount
n = length of numbers array

Explained: the length of the numbers array is technically an iteration right?
- well we have to iterate for every a amount. as in we have to loop for 4, 3, 2, 1 and their baby nodes
Time Complex: O(n^a) = Expotential


*/

/*
memoized complexity:
a= amount
n=length of numbers

We still have to iterate per amount number but its not as bad as to the power of the amount number b/c of memoization
not as fast as o(n) but faster than o(n^a)

Time Complexity: O(N * A)
Space Complexity: O(a)
*/

const sumPossible = (amount, numbers, memo = {}) => {
  // todo
  if (amount in memo) return memo[amount];
  if (amount < 0) return false;
  if (amount === 0) return true;

  for (let number of numbers) {
    var possible = sumPossible(amount - number, numbers, memo);
    memo[amount] = possible;

    if (possible === true) return true;
  }

  return false;
};

sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
sumPossible(15, [6, 2, 10, 19]); // -> false
sumPossible(13, [6, 2, 1]); // -> true
sumPossible(103, [6, 20, 1]); // -> true
sumPossible(12, []); // -> false
sumPossible(12, [12]); // -> true
sumPossible(0, []); // -> true
sumPossible(271, [10, 8, 265, 24]); // -> false
sumPossible(2017, [4, 2, 10]); // -> false
sumPossible(13, [3, 5]); // -> true
sumPossible(10, [4, 5, 7]); // -> true
