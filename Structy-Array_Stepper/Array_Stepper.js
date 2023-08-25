const arrayStepper = (nums, current = 0, memo = {}) => {
  // todo

  if (current in memo) return memo[current];
  if (current === nums.length - 1) return true;
  if (nums[current] === 0 || nums[current] === undefined) return false;

  var possible = false;

  for (var i = 1; i <= nums[current]; i++) {
    possible = possible || arrayStepper(nums, current + i, memo);
  }

  memo[current] = possible;

  return possible;
};

console.log(arrayStepper([2, 4, 2, 0, 0, 1])); // -> true

console.log(arrayStepper([2, 3, 2, 0, 0, 1])); // -> false
