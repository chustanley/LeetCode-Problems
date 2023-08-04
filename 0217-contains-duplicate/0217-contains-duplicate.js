/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var resultObject = {};

    
    /*
    You loop through the array and you store each number as a key and a value of its occurance. 
    If the key is already present then return true on duplicate is present 
    If not, then add a value of 1 for its occurance
    */
    
    for (var i = 0; i < nums.length; i++) {
        if (resultObject[nums[i]]) {
            return true;
        } else {
            resultObject[nums[i]] = 1;
        }
    }
    
    //Return false after the loop because you dont know, maybe the last element is a duplicate.
    return false;
};