/**
 * @param {number} n
 * @return {number}
 */

// https://leetcode.com/problems/domino-and-tromino-tiling/

/**
dp[n] = dp[n-1] + dp[n-2] + 2 * (dp[n-3] + ... + dp[0])

        = dp[n-1] + dp[n-3] + dp[n-2] + dp[n-3] + 2 * (dp[n-4] + ... dp[0])

        = dp[n-1] + dp[n-3] + dp[n-1]

        = 2 * dp[n-1] + dp[n-3]
*/

var numTilings = function(n) {
  let M = 1e9 + 7
  let dp = new Array(n).fill(0);
  dp[0] = 1, dp[1] = 2, dp[2] = 5;
  for (let i = 3; i < n; ++i) {
    dp[i] = (2 * dp[i-1] + dp[i-3]) % M;
  }
  return dp[n-1];
};