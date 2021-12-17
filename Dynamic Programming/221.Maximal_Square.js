/**
 * @param {character[][]} matrix
 * @return {number}
 */

// https://leetcode.com/problems/maximal-square/

var maximalSquare = function(matrix) {
  // dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1
  let m = matrix.length, n = matrix[0].length;
  let dp = new Array(m).fill().map(() => new Array(n).fill(0));
  let res = 0;

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === 0 || j === 0) {
        dp[i][j] = +matrix[i][j];
      }
      else if (matrix[i][j] === '1') {
        dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1;
      }
      
      res = Math.max(res, dp[i][j]);
    }   
  }

  return res * res;
};