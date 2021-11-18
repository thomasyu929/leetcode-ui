/**
 * @param {number[]} nums
 * @return {number[]}
 */

// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function(nums) {
  let res = [];
  for (let num of nums) {
    let idx = Math.abs(num) - 1;
    if (nums[idx] > 0) {
      nums[idx] *= -1
    }
  }
  
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  
  return res;
};