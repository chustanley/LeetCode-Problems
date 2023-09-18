/*
Write a function, befittingBrackets, that takes in a string as an argument.
The function should return a boolean indicating whether or not the string contains correctly matched brackets.
You may assume the string contains only characters: ( ) [ ] { }
*/

const befittingBrackets = (str) => {
  if (str.length === 0) return true;

  let stack = [];

  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of str) {
    //Checks to see if that character is inside of the brackets object as a key
    if (char in brackets) {
      //If it is, push not the key but the value because later when we recieve a char that isnt a open bracket, we want to check the stack for the latest bracket.
      //The rule: no bracket should 'close' if there are any remainding brackets open. Meaning that if you encounter a closing bracket, the
      //one on the end of the stack / most recently added better BE the same one were trying to close it with or else we return false.
      stack.push(brackets[char]);
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(befittingBrackets("{[(}])")); // -> false
