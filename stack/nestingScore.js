/*

SINGLE:
[] : worth 1 point

[] [] [] : worth 3 points

NESTED
[[][][]] - nested 3 which is 3 * 2 = 6
[[][][]] [] - nested 3 which is 3 * 2 = 6 but plus 1 = 7

[[][]][] = 6


Begin the stack with a 0,
any open we add 0
if we see close

*/

const nestingScore = (str) => {
  const stack = [0];
  for (let char of str) {
    //If open bracket found, keep adding 0's to it
    if (char === "[") {
      stack.push(0);
    } else {
      //If you pop and its = 0, change the last item in the array to a (+1)
      const popped = stack.pop();
      if (popped === 0) {
        stack[stack.length - 1] += 1;
      } else {
        //If its a non 0, we multiply the last item on stack by 2.
        //Remember if you pop, it removes it meaning that the... stack[stack.length - 1] is NOW before the POPPED item
        //What this does is delete the most recently popped and reassign the most recently last.
        stack[stack.length - 1] += 2 * popped;
      }
    }
  }

  return stack[0];
};

nestingScore("[[[[[[[][]]]]]]][]"); // -> 129
