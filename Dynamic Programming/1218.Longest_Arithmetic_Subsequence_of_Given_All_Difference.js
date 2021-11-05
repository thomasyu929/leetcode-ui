/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */

// https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/

// // no need to continuous;

var longestSubsequence = function(arr, difference) {
  let dp = {};
  let res = 1;
  for (let num of arr) {
    dp[num] = 1 + (dp[num - difference] || 0);
    res = Math.max(dp[num], res);
  }
  
  return res;
};