/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;
  const output = new Array(n);
  let productSoFar = 1;

    
    /*
    'This loop calculates the product of EACH element -> towards its left'
    Our argument is: [1, 2, 3, 4]
    
    1: [1] // product of before 1 = 1 even though we dont include 'self' -> acts as a place holder 
    2: [1] // product of before 2 = 1 
    3: [2] // product of before 3 = 2
    4: [6] // product of before 4 = 6
    
    result = [1, 1, 2, 6]
    */
    
    // Keep in mind, this is also iterating upward 
  for (let i = 0; i < n; i++) {
    output[i] = productSoFar;
    productSoFar *= nums[i];
  }
  

    
    /*
    This loop calculates the product of EACH element -> towards its right

    Our argument is: [1, 2, 3, 4]
    
    4: [1
    3: [4]
    2: [12]
    1: [24]
    
    result = [24, 12, 4, 1]
    */
    
    
    
  productSoFar = 1;
  for (let i = n - 1; i >= 0; i--) { //n = 3, 2, 1, 0
    output[i] *= productSoFar; //productsofar = 1, 4, 12, 24 <- this is from line 49
    productSoFar *= nums[i]; //the reason why this works is because productSoFar acts as an accumulator. 
  }
  
  return output;
}