/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/

// var dominantIndex = function(nums) {
//   let mx = Number.MIN_SAFE_INTEGER;
//   let res = -1;

//   for (let i = 0; i < nums.length; ++i) {
//     if (mx < nums[i]) {
//       mx = nums[i];
//       res = i;
//     }    
//   }

//   for (let i = 0; i < nums.length; ++i) {
//     if (i !== res && nums[i] * 2 > mx) {
//       return -1;
//     }
//   }

//   return res;
// };

var dominantIndex = function(nums) {
  let n = nums.length;
  if (n === 1) {
    return 0;
  }

  let a = -1, b = 0;
  for (let i = 1; i < n; ++i) {
    if (nums[i] > nums[b]) {
      a = b;
      b = i;
    }
    else if (a === -1 || nums[i] > nums[a]) {
      a = i;
    }
  }

  return nums[b] >= nums[a] * 2 ? b : -1;
};