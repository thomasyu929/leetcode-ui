/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/house-robber-ii/

var rob = function(nums) {
  let n = nums.length;
  if (n <= 2) {
    return Math.max(...nums);
  }
  return Math.max(helper(nums.slice(0, n-1)), helper(nums.slice(1)));
};

var helper = function(nums) {
  let n = nums.length;
  let dp = new Array(n).fill(0);
  dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; ++i) {
    dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
  }
  
  return Math.max(...dp);
}