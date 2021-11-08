/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/find-peak-element/

// var findPeakElement = function(nums) {
//   // it will keep increase until find peek postion.
//   for (let i = 1; i < nums.length; ++i) {
//     if (nums[i] < nums[i - 1]) {
//       return i - 1;
//     }
//   }

//   return nums.length - 1;
// };

var findPeakElement = function(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }

  return right;
}
