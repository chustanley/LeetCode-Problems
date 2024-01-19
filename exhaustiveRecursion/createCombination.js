/*
Write a function, createCombinations, that takes in an array and a length as arguments.
The function should return a 2D array representing all of the combinations of the specifized length.
The items within the combinations and the combinations themselves may be returned in any order.
You may assume that the input array contains unique elements and 1 <= k <= items.length.
*/

/*
Hard to understand.. but heres a quick overview

With a given number, return subsets of that specific length ONLY. Also consider good time complexity.

How does it work?


if item.length < k, which means that we want a length of 4 for each subset but only have 4, or less than we return an array to signify its useless.
  - we only care for the items.length to be more than k!

if k === 0 meaning that we are looking for subsets w/ 0 length, which is impossible, we return [[]]

What do we want?
- We want to check combinations considering the current / first item and we want to create combinations not considering it.
  - we


*/

const createCombinations = (items, k) => {
  if (items.length < k) return [];

  if (k === 0) return [[]];

  const first = items[0];
  const combosWithFirst = [];

  const decrement = createCombinations(items.slice(1), k - 1);
  /*
    [a, b, c], 2
    [b, c], 1
    [c] 0
  */

  //Pushes B into combosWithFirst w/ spread of [[]] <-- check console.log
  for (let combo of decrement) {
    combosWithFirst.push([first, ...combo]);
  }

  console.log("with first", combosWithFirst);

  const combosWithoutFirst = createCombinations(items.slice(1), k);

  console.log("withOUT first", combosWithoutFirst);

  const result = [...combosWithFirst, ...combosWithoutFirst];
  return result;
};

console.log(createCombinations(["a", "b", "c"], 2)); // ->
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]
