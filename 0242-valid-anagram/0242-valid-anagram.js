/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    /*
    First of all, what is an anagram: a word or phrase or name formed by rearranging the letters.

    Things to be aware of
    
    both words should have the proper amount of length

    the moment a letter in s is not in t its an automatic false. 
     */


    //Making sure that the length are the same.
  if (s.length !== t.length) {
    return false;
  }

  // Convert the strings to arrays, sort them, and compare
  const sortedStr1 = s.split('').sort().join('');
  const sortedStr2 = t.split('').sort().join('');

  return sortedStr1 === sortedStr2;
};