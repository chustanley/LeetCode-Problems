/**
 * @param {string} s
 * @return {boolean}
 */

//THIS IS THE WHATEVER WAY TO DO IT 

// var isPalindrome = function(s) {
    
//     var onlyLetters = s.replace(/[^A-Za-z0-9]/g, '');
//     var lowerCase = onlyLetters.toLowerCase();
    
//     //creating reverse
//     var reverse = lowerCase.split('').reverse().join('')
    
//     console.log(lowerCase)
//     console.log(reverse)
//     return reverse === lowerCase;
// };



var isPalindrome = function(s) {
    //This removes all of the excess elements that arent letters!
    var onlyLetters = s.replace(/[^A-Za-z0-9]/g, '');
    
    //this lowercases everything
    var lowerCase = onlyLetters.toLowerCase();
    
    var right = 0;
    var left = lowerCase.length - 1;
    
    //You are slowely going towards the middle and if it doesnt equal the same, you are return false immediately.
    while (right < left) {
        if (lowerCase[right] === lowerCase[left]) {
            right++;
            left--
        } else {
            return false;
        }
    }
   return true;
};