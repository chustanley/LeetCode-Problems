/*
Write a function, pairedParentheses, that takes in a string as an argument.
The function should return a boolean indicating whether or not the string has well-formed parentheses.
You may assume the string contains only alphabetic characters, '(', or ')'.
*/

const pairedParentheses = (str) => {
  let count = 0;

  for (let letter of str) {
    if (letter === "(") count++;

    if (letter === ")") {
      if (count === 0) {
        return false;
      }
      count--;
    }
  }

  return count === 0 ? true : false;
};

pairedParentheses("(())(water()()"); // -> false
