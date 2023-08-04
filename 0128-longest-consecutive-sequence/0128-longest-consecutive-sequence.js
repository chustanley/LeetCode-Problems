/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    //If the nums array is 0 length, return 0 meaning that there is NO consecutives
  if (nums.length === 0) {
    return 0;
  }

  // Create a Set to store all elements from the array
    //Set is am object storage system that doesnt have values but technically only the key
    //Can take an array like nums and break all of its element apart into the object 
    // {100, 4, 200, 1, 3, 2} from [100, 4, 200, 1, 3, 2]
  const numSet = new Set(nums);

  let longestStreak = 0;

    //Looping through sets which an object! 
  for (const num of numSet) {
    // Only process if the current number is the start of a sequence
    // The reason for this is because you dont want to keep counting just to find out there was 
    // a lower number towards the end of the array
    
    // The 'set' object has 'has and add' functions that work in 0(1) time complex. 
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Calculate the length of the consecutive sequence
        // While loop will keep running until proven false! 
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};

