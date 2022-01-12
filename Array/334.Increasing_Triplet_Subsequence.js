/**
 * @param {number[]} nums
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/increasing-triplet-subsequence/

var increasingTriplet = function(nums) {
  let m1 = Number.MAX_VALUE, m2 = Number.MAX_VALUE;

  for (let num of nums) {
    if (m1 >= num) {
      m1 = num;
    }
    else if (m2 >= num) {
      m2 = num;
    }
    else {
      return true;
    }
  }

  return false;
};