/*
Write a function, decompressBraces, that takes in a compressed string as an argument.
The function should return the string decompressed.
The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.
You may assume that every number n is guaranteed to be an integer between 1 through 9.
You may assume that the input is valid and the decompressed string will only contain alphabetic characters.
*/

/*
Approach:

  For every number that is from 1-9, we are going to expose whatever is inside of the brackets next to it.

  There are going to be nested objects allowed.

  However, were going to add everthing to a stack, except for the brackets. but the moment we encounter a closed bracket,
  we are going to pop all of it out from a stack until we hit a number

  get both the number and string into seperate variables

  then using an external function, we are going to duplicate the string until we get the x amount
  then we push this back to the stack


Things to be careful for:
- Need a string of numbers because when we pop something out of the s string, we cant really tell if its a number or not unless we
check if its inside of the nums string.

- Be aware of how you are adding the string into the external variable. Make sure its in the order of the stack.


*/

const decompressBraces = (s) => {
  const nums = "123456789";
  const stack = [];

  for (let char of s) {
    //Adding everything TO the stack that isnt a closing bracket excluding the opening bracket.

    if (nums.includes(char)) {
      stack.push(Number(char));
    } else {
      if (char !== "}") {
        if (char !== "{") {
          stack.push(char);
        }
      } else {
        let string = "";

        while (typeof stack[stack.length - 1] !== "number") {
          const popper = stack.pop();

          //This will keep it in order.
          //string += popper WILL NOT
          /*
        String += popper will lead to  ooo y rather than y ooo
        */
          string = popper + string;
        }

        const multiply = stack.pop();
        const duplicate = repeat(multiply, string);
        stack.push(duplicate);
      }
    }
  }

  return stack.join("");
};

const repeat = (number, string) => {
  var resultString = "";

  while (number !== 0) {
    resultString += string;
    number--;
  }
  return resultString;
};

console.log(decompressBraces("2{q}3{tu}v"));
// -> qqtututuv
