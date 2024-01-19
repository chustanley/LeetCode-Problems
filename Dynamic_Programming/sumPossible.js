/*
Write a function sumPossible that takes in an amount and an array of positive numbers.
The function should return a boolean indicating whether or not it is possible to create the amount by
summing numbers of the array. You may reuse numbers of the array as many times as necessary.
You may assume that the target amount is non-negative.
*/

const sumPossible = (target, numbers, memo = {}) => {
  /*
  If target is inside of memo, return the value so we dont have to iterate again
  If target is negative return false (which wont trigger anything)
  If target is 0, return true which will return upwards towards the recursive stack.
  */
  if (target in memo) return memo[target];
  if (target < 0) return false;
  if (target === 0) return true;

  /*
  Iterate through the numbers array and keep recursing through target - number to see if we can find a 0.
  whenever the recursive function returns, save it with the diffence created

  If its true, return true which will return upwards towards the stack.
  */
  for (let number of numbers) {
    const possibility = sumPossible(target - number, numbers, memo);

    memo[target - number] = possibility;

    if (possibility === true) return true;
  }

  //If true was never returned upwards towards the recursive stack. RETURN false.
  return false;
};

console.log(sumPossible(2017, [4, 2, 10])); //False

const _sumPossible = (target, numbers, memo = {}) => {
  //If the difference / target is inside of memo, return its value
  if (target in memo) return memo[target];
  //Negative number due to a numbers array being bigger than target
  if (target < 0) return false;
  //Made a true sum Possible, so return all the way
  if (target === 0) return true;

  //Iterating through the numbers array and getting each item and subtracting the target by it.
  for (let number of numbers) {
    const subtracted = target - number;
    const possibility = _sumPossible(subtracted, numbers, memo);
    //Giving this 'value' of subtraction a value of true or false.
    memo[subtracted] = possibility;
    //If true, return all the way up the tree.

    console.log(memo);
    if (possibility === true) return true;
  }

  //Not necessary to have memo[target] = false because once we return true, we go all the way up the tree
  memo[target] = false;
  //If after everything and you still couldnt find it, return false.
  return false;
};

/*
w/o memoization
- Time: O (n.length^target)     -      we will be performing n.length task for the amount of target.
- Space: O (target)

w/ memoization
- Time: O (n.length * target)    -     not expotential no more because of memoization
- Space: O (target)

*/
