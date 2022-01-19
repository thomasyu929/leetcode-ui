/**
 * @param {number[]} nums
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
  let m = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (m.get(nums[i])) {
      return true;
    }
    else {
      m.set(nums[i], true);
    }
  }

  return false;
};