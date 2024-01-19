/*
Write a function, compress, that takes in a string as an argument.
The function should return a compressed version of the string where consecutive occurrences of
the same characters are compressed into the number of occurrences followed by the character.
Single character occurrences should not be changed.
*/

//YOUR APPROACH
/*
You are using the first item as a sample of the first item. You have a multiplier as one and an empty result string.

you are going to iterate through the string and start at 1.
- You will check if the items match the sample variable and if it does, incremenet multiplier.
- If not, we check if multiplier is greater than one. if so, we add the number and the x amount of letters.
    - If the multiplier is not greater than one, then just add the word to it without the number 1.


Change the sample variable value and turn the multiplier back to 1!
*/
const _compress = (s) => {
  let currentLetter = s[0];
  let multiplier = 1;
  let resultString = "";

  for (let i = 1; i < s.length; i++) {
    if (currentLetter === s[i]) {
      multiplier++;
    } else {
      if (multiplier > 1) {
        resultString += multiplier.toString();
      }

      resultString += currentLetter;
      currentLetter = s[i];
      multiplier = 1;
    }
  }

  /*
  The reason why this is needed is because we count on the last value not being equal. However, if the iteration ends and we The
  never added it to the resultString because of the condition. We would need to manually add it here.

  Explained: line 15-17 doesnt run because in the end we technically switch letters

  if multiplier is 1 and were at the end that means that there is only 1 singly letter in the end.
  if multiplier is 1+ and were at the end that means the last item in the string has duplicates and we have to add the number and letters.
  */
  return multiplier > 1
    ? (resultString += multiplier.toString() + currentLetter)
    : (resultString += currentLetter);
};

const compress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;

  //This <= is very important because if its only < and not <=, our 'else' will not trigger correctly and would drop the last combo
  while (j <= s.length) {
    //if equal += 1 as in move the current pointer by 1 position
    if (s[i] === s[j]) {
      j += 1;
      //If not equal, j - i will give you the difference and if j - i = 1, we just push the nums[i] since its pointing at the first copy
      //If j-i is not equal to 1, we .push(nums.toString(), nums[i])
    } else {
      //num in this case is the COUNT of HOW many letters are there.
      //UNTIL J LANDS ON A CHARACTER THAT ISNT THE SAME AS I WE GO HERE
      //ONCE HERE, THE DIFFERENCE WILL = THE COUNT because index count corretly here.
      const num = j - i;
      if (num === 1) {
        result.push(s[i]);
      } else {
        result.push(String(num), s[i]);
      }
      //Then we catch i up to j where j is already at the new letter thats not the same as the ones we just added to result.
      //J not being the same letter as I anymore is what triggers this condition

      //We have to bring i back up to speed with j until theyre different again
      i = j;
    }
  }

  return result.join("");
};

//You can have result as a string but if you keep += it, it increases the space complexity
//The variable lives somewhere
console.log(compress("ccaaatsss"));
