/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
  if (nums.length === 0) {
    return 0;
  }

  // Create a Set to store all elements from the array
  const numSet = new Set(nums);

  let longestStreak = 0;

  for (const num of numSet) {
    // Only process if the current number is the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Calculate the length of the consecutive sequence
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};