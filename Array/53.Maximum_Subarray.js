/**
 * @param {number[]} nums
 * @return {number}
 */

// Kadane's Algorithm

var maxSubArray = function(nums) {
  let res = 0
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i-1] > 0) {
      nums[i] += nums[i-1];
    }
  }
  
  return Math.max(...nums);
};