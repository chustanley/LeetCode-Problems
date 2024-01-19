/*
Write a function, fiveSort, that takes in an array of numbers as an argument.
The function should rearrange elements of the array such that all 5s appear at the end.
Your function should perform this operation in-place by mutating the original array. The function should return the array.
Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
*/

/*
NOTES:
Use 2 pointers one for the end and one for the start. if the end is a 5 keep decrementing till you find a non 5.
Then if the start === 5 swap them, regardless if you swap or not, increment start till you find a 5!
*/

const fiveSort = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[end] === 5) {
      end--;
    } else {
      if (nums[start] === 5) {
        /*
        This switches them both at the same time.
        Doing it like nums[start] = nums[end] and then nums[end] = nums[start] WILL NOT do anything
        Doing it below will change them simultaneously

        This is considered destructering syntax

        swapping 2 items like below is in constant time operation
        */
        [nums[start], nums[end]] = [nums[end], nums[start]];
      }

      //Increment regardless of if the number is equal to 5 or not
      start++;
    }
  }
  return nums;
};

console.log(fiveSort([12, 5, 1, 5, 12, 7]));
