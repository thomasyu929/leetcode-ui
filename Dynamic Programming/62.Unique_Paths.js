/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// https://leetcode.com/problems/unique-paths/

// var uniquePaths = function(m, n) {
//   // state transition equation
//   // dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + 1;
//   let dp = new Array(m).fill().map(val => new Array(n).fill(0));
//   dp[0][0] = 1;
//   for (let i = 1; i < m; ++i) {
//     dp[i][0] = 1;   //there is only one way on the first row or column
//   }
//   for (let j = 1; j < n; ++j) {
//     dp[0][j] = 1;
//   }
//   for (let i = 1; i < m; ++i) {
//     for (let j = 1; j < n; ++j) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//     }
//   }
//   return dp[m - 1][n - 1];
// };

// one dimension array;
var uniquePaths = function(m, n) {
  let dp = new Array(n).fill(1);
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[j] += dp[j - 1]
    }
  }
  
  return dp[n - 1];
}