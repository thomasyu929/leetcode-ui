/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
  let left = 0,
      right = 0,
      n = nums.length;
  while (right < n) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  
  return nums;
};

// var moveZeroes = function(nums) {
//   for (let i = 0, j = 0; i < nums.length; ++i) {
//     if (nums[i]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       j++;
//     }
//   }
  
//   return nums;
// }