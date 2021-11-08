/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// https://leetcode.com/problems/search-insert-position/

// var searchInsert = function(nums, target) {
//   for (let i = 0; i < nums.length; ++i) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }
//   return nums.length;
// }

var searchInsert = function(nums, target) {
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  let left = 0, right = nums.length;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] >= target) {
      right = mid;
    }
    else {
      left = mid + 1;
    }
  }
  
  return left;
};