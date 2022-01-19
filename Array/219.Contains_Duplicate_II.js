/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/contains-duplicate-ii/

var containsNearbyDuplicate = function(nums, k) {

  let m = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (m.get(nums[i]) >= 0 && i - m.get(nums[i]) <= k) {
      return true;
    }
    else {
      m.set(nums[i], i);
    }
  }

  return false;
};