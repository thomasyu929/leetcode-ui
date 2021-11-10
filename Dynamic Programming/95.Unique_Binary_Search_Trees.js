/**
 * @param {number} n
 * @return {number}
 */

// https://leetcode.com/problems/unique-binary-search-trees/
// Catalan Number: C(2n,n)/(n+1)

var numTrees = function(n) {
  let dp = new Array(n + 1).fill(0);
  // empty tree can treat as 1;
  dp[0] = 1, dp[1] = 1;
  for (let i = 2; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  
  return dp[n];
};