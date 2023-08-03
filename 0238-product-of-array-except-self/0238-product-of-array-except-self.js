/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;
  const output = new Array(n);
  let productSoFar = 1;
  
  // Calculate products to the left of each element
  for (let i = 0; i < n; i++) {
    output[i] = productSoFar;
    productSoFar *= nums[i];
  }
  
  // Calculate products to the right of each element and update output
  productSoFar = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= productSoFar;
    productSoFar *= nums[i];
  }
  
  return output;
}