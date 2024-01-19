/*
Problem Description:

Write a function, subsets, that takes in an array as an argument.
The function should return a 2D array where each subarray represents one of the possible subsets of the array.
The elements within the subsets and the subsets themselves may be returned in any order.
You may assume that the input array contains unique elements.
*/

/*
Human Words:

return all possibilities of each item in the array w/ no repeats
look at the commented out answer

Advice: Draw a tree, left is taking the current, right is ignoring the current, each level is a recursive call. Look at video graph

*/

const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  const first = elements[0]; //C

  /*
  What subsetsWithFirst will look like throughout recursion
  [[]]
  [[], [C]]


  withoutFirst     withFirst
  [[], [C],        [B], [B, C]]

  [[], [C], [B], [B, C], [A], [A, C], [A, B], [A, B, C]]

  with first uses without first in the loop and iteretes through it while spreading each of its withoutFirst value and adding the current to it.
  */

  const subsetsWithoutFirst = subsets(elements.slice(1)); // [[]]
  const subsetsWithFirst = [];

  for (let sub of subsetsWithoutFirst) {
    subsetsWithFirst.push([first, ...sub]);
  }

  /*
  Look closely, we want to return subsets INCLUDING current index and EXCLUSIVE of current index.
  WE iterate to ADD current index into the EXCLUSIVE array

  In the end, we SPREAD out the array that includes current, and SPREAD out the ones that DONT include current.
  */

  return [...subsetsWithoutFirst, ...subsetsWithFirst];
};

subsets(["a", "b", "c"]); // ->
// [
//   [],
//   [ 'c' ],
//   [ 'b' ],
//   [ 'b', 'c' ],
//   [ 'a' ],
//   [ 'a', 'c' ],
//   [ 'a', 'b' ],
//   [ 'a', 'b', 'c' ]
// ]
