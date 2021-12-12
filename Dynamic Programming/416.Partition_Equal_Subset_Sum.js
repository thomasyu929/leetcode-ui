/**
 * @param {number[]} nums
 * @return {boolean}
 */

// https://leetcode.com/problems/partition-equal-subset-sum/

var canPartition = function(nums) {
  // dp[i] = dp[i] || dp[i-num];
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2) {
    return false;
  }
  let target = sum / 2;
  let dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (let num of nums) {
    for (let i = target; i >= num; --i) {
      dp[i] = dp[i] || dp[i-num];
    }
  }
  
  return dp[target];
};