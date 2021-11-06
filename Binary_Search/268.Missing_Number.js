/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/missing-number/

// var missingNumber = function(nums) {
//   let res = 0;
//   for (let i = 0; i < nums.length; ++i) {
//     res ^= nums[i] ^ (i + 1);
//   }

//   return res;
// };

// already sort; binary-search is better way;
var missingNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let left = 0,
      right = nums.length;
  while (left < right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] > mid) {
      right = mid;
    }
    else {
      left = mid + 1;
    }
  }

  return right;
}