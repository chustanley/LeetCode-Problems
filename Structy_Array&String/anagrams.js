/*
Write a function, anagrams, that takes in two strings as arguments.
The function should return a boolean indicating whether or not the strings are anagrams.
Anagrams are strings that contain the same characters, but in any order.
*/

/*
   Notes: Check if the length doesnt match because that would instantly not qualify
   Then store them in a hash map and use the value of the key as the count. Do this for both.
   Then create another loop and check one hash maps object to another and if the values dont match (count) then return false.

    Complexity Notes: Since were not using nested loops, its still o(n) linear.
    In this case, since were doing 2 loops in one function its technically O(s1.length + s2.length)! SAME WITH SPACE

   Time complexity: O(s1.length + s2.length)
   Space complexity:O(s1.length + s2.length)
  */
const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  let s1Storage = {};
  let s2Storage = {};

  for (let letter of s1) {
    if (s1Storage[letter] === undefined) {
      s1Storage[letter] = 1;
    } else {
      s1Storage[letter]++;
    }
  }

  for (let letter of s2) {
    if (s1Storage[letter] === undefined) {
      return false;
    } else {
      if (s2Storage[letter] === undefined) {
        s2Storage[letter] = 1;
      } else {
        s2Storage[letter]++;
      }
    }
  }

  for (let key in s1Storage) {
    if (s1Storage[key] !== s2Storage[key]) return false;
  }
  return true;
};

console.log(anagrams("restful", "fluster")); // -> true
