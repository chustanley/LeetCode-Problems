/*
Write a function, nonAdjacentSum, that takes in an array of numbers as an argument.
The function should return the maximum sum of non-adjacent elements in the array.
There is no limit on how many elements can be taken into the sum as long as they are not adjacent.
*/

/*
Stanley Approach:

We will be doing plus 2 from index 0 till we reach the end.
Be aware of..
- We only want to include +2 in the sum not the +1. Thats why we do currentIndex + nonadjacent(i + 2) AND no addition for i + 1;



*/

const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];

  if (i >= nums.length) return 0;

  //Selecting current and recursing on a +2
  const plusTwo = nums[i] + nonAdjacentSum(nums, i + 2, memo);
  //Selecting NOT the current and recursing on a +1
  const plusOne = nonAdjacentSum(nums, i + 1, memo);

  //Finding the maximum of the 2 and labeling the current index that maximum!So everytime we land on it its always going to tell me the maximum val in here.
  memo[i] = Math.max(plusTwo, plusOne);
  return memo[i];
};

const nums = [
  72, 62, 10, 6, 20, 19, 42, 46, 24, 78, 30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
  9, 12, 3, 1, 19, 30, 50, 20,
];

console.log(nonAdjacentSum(nums)); // -> 488
