/*
Write a function, permutations, that takes in an array an argument.
The function should return a 2D array where each subarray represents one of the possible permutations of the array.
The subarrays may be returned in any order.
You may assume that the input array contains unique elements.
*/

/*
HUMAN WORDS:

RETURN all possible outcomes of each index in the array.

*/

const permutations = (items) => {
  if (items.length === 0) return [[]];

  const first = items[0];

  /*
  This is what causes exhaustive recursion, it will keep recursing until it hits the end of the items array and the edgecase returns [[]]

  history of perms value

  [[]]
  [[C]]
  [[B, C], [C, B]] <--- INNER FOR LOOP ACTIVATED AND WILL RETURN....

  Inner loop will iterate through every value within the INDEX of.. PERM of PERMS. which is [B, C] then it will put the current val before, inbetween and after


  [[A, B, C], [B, A, C], [B, C, A], [A, C, B], [C, A, B], [C, B, A]]

  */
  const perms = permutations(items.slice(1));
  console.log(perms);

  const fullPermutations = [];

  for (let perm of perms) {
    for (let i = 0; i <= perm.length; i += 1) {
      //When we get perms to be [[C]]..
      //We will iterate through it and add c before and after
      //We will only be working with on letter for simplicity but the for loop here is going to iterate through every letter inside of perm (array) and add the current letter (first) in between and after and before to create every possible outcome.

      //For the [[c]] example, its going to be..

      //[...[], b, ...[c]]
      //[...[c], b, ...[]]

      fullPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  }

  //Then THIS will return [[b, c], [c, b]]
  //Then the for loop will iterate through the first index [b, c] and place 'A' before, inbetween and after ABC

  //[[A, B, C], [B, C, A], [B, C, A]]
  return fullPermutations;
};

console.log(permutations(["a", "b", "c"])); // ->
// [
//   [ 'a', 'b', 'c' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'a', 'c', 'b' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]
// ]
