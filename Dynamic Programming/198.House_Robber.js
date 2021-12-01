/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/house-robber/

var rob = function(nums) {
  // dp[i] = Math.max(dp[i-1], nums[i] + dp[i - 2])
  let n = nums.length;
  if (n <= 2) {
    return Math.max(...nums)
  }
  dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; ++i) {
    dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2]);
  }
  
  return dp[n-1];
};