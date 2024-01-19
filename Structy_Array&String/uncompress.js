/*
Write a function, uncompress, that takes in a string as an argument.
The input string will be formatted into multiple groups according to the following pattern:
*/

/*
How this works

- uses a result array to store the values
- uses a numbers string to see which value within s is a numbers
- uses i and j as pointers that will help look for numbers and by the time j is on a letter we can .slice(i, j)
since its going to be exclusive of j. Then after we loop, we reassign j to the next letter in s

This is assumed that the numbers can be multiple consecutive letters within s and that after the number itll only have ONE letter
*/

/*
TIME and SPACE

O(#numbers  x  #how many letters)
*/

const uncompress = (s) => {
  let result = "";
  const numbers = "0123456789";
  let i = 0;
  let j = 0;

  while (j < s.length) {
    //This doesnt affect time complexity because no matter how long s is, it doesnt affect the includes loop.
    //NUMBERS STRING DOESNT SCALE ALONG WITH YOUR INPUT STRING THATS WHY IT DOESNT AFFECT TIME COMPLEX
    //NOTE: This is trying to find out how big the 'number is'
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      //J is current on the letter. that we need to make copies of.
      //s.slice(i,j) doesnt consider j in mix and will only grab the number
      //NOTE: This will create the full number and now run a for loop using that number as a limiter
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        //It is better to use an array because string concatantion is o(n) since were making copies of it internally
        //ADVICE: USE ARRAY and push TO IT and then join it at the end. You can try it and run the test and see the difference :)
        //adding a string together is  o(n) because strings are unmutable. so this will make it slower.
        //read advice
        result += s[j];
      }
      //After the sequence is created, we bring i and j into one index ahead and starting at the similar element.
      j += 1;
      i = j;
    }
  }

  return result;
};

console.log(uncompress("3n12e2z"));
