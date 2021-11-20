/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode-cn.com/problems/longest-harmonious-subsequence/

// var findLHS = function(nums) {
//   let res = 0;
//   let m = {};
//   for (let num of nums) {
//     m[num] = m[num] ? m[num]+1 : 1;
//     if (m[num+1]) {
//       res = Math.max(res, m[num+1] + m[num]);
//     }
//     if (m[num-1]) {
//       res = Math.max(res, m[num-1] + m[num]);
//     }
//   }

//   return res;
// };

var findLHS = function(nums) {
  let res = 0;
  let start = 0,
      new_start = 0;
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] - nums[start] > 1) {
      start = new_start;
    }
    if (nums[i] !== nums[i-1]) {
      new_start = i;
    }
    if (nums[i] - nums[start] === 1) {
      res = Math.max(res, i - start + 1);
    }
  }

  return res;
}