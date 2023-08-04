/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    var onlyLetters = s.replace(/[^A-Za-z0-9]/g, '');
    var lowerCase = onlyLetters.toLowerCase();
    
    //creating reverse
    var reverse = lowerCase.split('').reverse().join('')
    
    console.log(lowerCase)
    console.log(reverse)
    return reverse === lowerCase;
};