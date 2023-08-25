const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  // todo

  if (i in memo) return memo[i];
  if (i >= nums.length) return 0;

  var plus2 = nums[i] + nonAdjacentSum(nums, i + 2, memo);
  var plus1 = nonAdjacentSum(nums, i + 1, memo);

  memo[i] = Math.max(plus2, plus1);

  return memo[i];
};

/*
BruteForce

n=length of numbers

Time: o(2^n) one tree to the next will be double.

Space: o(n)


memoize:
O(n) and O(n)

*/
