/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode-cn.com/problems/count-special-quadruplets/

var countQuadruplets = function(nums) {
  let res = 0;
  let n = nums.length;
  let m = new Map();

  for (let b = n-3; b >= 1; --b) {
    for (let d = b+2; d < n; ++d) {
      let num = nums[d] - nums[b+1];
      m.set(num, m.get(num) ? m.get(num)+1 : 1);
    }

    for (let a = 0; a < b; ++a) {
      let sum = nums[a] + nums[b];
      if (m.get(sum)) {
        res += m.get(sum);
      }
    }
  }

  return res;
};