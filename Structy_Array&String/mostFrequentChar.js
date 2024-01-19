/*
Write a function, mostFrequentChar, that takes in a string as an argument.
The function should return the most frequent character of the string.
If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
*/

/*
  Overview: Count the characters in the string and add them to the hashmap
  iterate through the hashmap again and find the largest number which should be saved as the value

  Complexity Notes: No nested loops but we do perform 2 loops and this still means linear.

  Time Complexity: O(n)
  Space Complexity: O(n)
  */

const mostFrequentChar = (s) => {
  var resultObject = {};

  for (var i = 0; i < s.length; i++) {
    if (resultObject[s[i]] === undefined) {
      resultObject[s[i]] = 1;
    } else {
      resultObject[s[i]]++;
    }
  }

  var greatest = 0;
  var letter = "";

  for (var key in resultObject) {
    if (resultObject[key] > greatest) {
      greatest = resultObject[key];
      letter = key;
    }
  }
  return letter;
};

mostFrequentChar("mississippi");

const _mostFrequentChar = (s) => {
  const count = {};

  for (let letter of s) {
    if (!(letter in count)) {
      count[letter] = 1;
    } else {
      count[letter]++;
    }
  }

  /*
 This utilizes less variables! pretty good thought analysis
 */
  let best = null;

  for (let letter of s) {
    if (best === null || count[letter] > count[best]) {
      best = letter;
    }
  }

  return best;
};
