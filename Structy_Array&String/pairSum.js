/*
Write a function, pairSum, that takes in an array and a target sum as arguments.
The function should return an array containing a pair of indices whose elements sum to the given target.
The indices returned must be unique.
Be sure to return the indices, not the elements themselves.
There is guaranteed to be one such pair that sums to the target.
*/

/*
Notes
- create a result object
- iterate through the number array and check if the target is greater than or equal to the current number (we dont want negatives)
- ONLY continue if it is and find the difference between the 2
- check if the object has the difference. if it does return the value of it and current index
- if not inside of the object, what we should do is add the current number and its index inside of it.

cool part: in test_00, were going to add 3 and its index of 0, eventually well come across 8-5 which will lead to 3 and well check if that 3 is inside of the object.

if 3 is inside the object, then return!
*/

const pairSum = (numbers, targetSum) => {
  const resultObject = {};

  for (let i = 0; i < numbers.length; i++) {
    if (targetSum >= numbers[i]) {
      const difference = targetSum - numbers[i];

      if (resultObject[difference] !== undefined) {
        return [i, resultObject[difference]];
      } else {
        resultObject[numbers[i]] = i;
      }
    }
  }
};
console.log(pairSum([4, 7, 9, 2, 5, 1], 3));
