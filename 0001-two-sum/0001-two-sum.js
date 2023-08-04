/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
 
    var resultObject = {};

    
    
    /*
    We loop through the entire nums array and for each element, we subtract the target from it.
    
    We check if the difference is inside the resultObject 
    
    If it is, return the index and the value within the key 
    
    if not, we add the element as the key and the value as the index! 
    
    */
    
    
    
 for (var i = 0; i < nums.length; i++) {
     var difference = target - nums[i];

     if (resultObject[difference] !== undefined) {
         return [i, resultObject[difference]]
     }

     resultObject[nums[i]] = i;
 }
};
