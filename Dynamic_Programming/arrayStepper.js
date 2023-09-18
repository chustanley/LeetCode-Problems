/*
Write a function, arrayStepper, that takes in an array of numbers as an argument.
You start at the first position of the array.
The function should return a boolean indicating whether or not it is possible to reach the last position of the array.
When situated at some position of the array, you may take a maximum number of steps based on the number at that position.
*/

/*
Approach:

based on the value we are on, it demonstrates the maximum amount of steps we can take going forward

If we encounter any 0 or if the value is undefined, return false.

We have a starting value of false for the variable possible. This will help us maintain a true if we EVER encounter one.

Within the for loop, we have nums[current] as the limiter and this will slowly increment through the recursion.
*/

const arrayStepper = (numbers, i = 0, memo = {}) => {
  if (i in memo) return memo[i];

  if (i >= numbers.length - 1) return true;

  const maxStep = numbers[i];
  for (let step = 1; step <= maxStep; step += 1) {
    if (arrayStepper(numbers, i + step, memo) === true) {
      memo[i] = true;
      return true;
    }
  }

  memo[i] = false;
  return false;
};

arrayStepper([2, 4, 2, 0, 0, 1]); // -> true
