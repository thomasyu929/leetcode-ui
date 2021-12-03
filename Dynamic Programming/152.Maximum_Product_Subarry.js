/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/maximum-product-subarray/

var maxProduct = function(nums) {
  let n = nums.length;
  if (!n) {
    return 0;
  }
  let res = nums[0];
  let mx = mn = nums[0];
  
  for (let i = 1; i < nums.length; ++i) {
    let tmax = mx, tmin = mn;
    mx = Math.max(tmax * nums[i], nums[i], tmin * nums[i]);
    mn = Math.min(tmin * nums[i], nums[i], tmax * nums[i]);
    res = Math.max(mx, res);
  }
  
  return res;
};