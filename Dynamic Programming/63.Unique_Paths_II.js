/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// https://leetcode.com/problems/unique-paths-ii

var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length,
      n = obstacleGrid[0].length;
  let dp = new Array(m).fill().map(() => new Array(n).fill(0));
  for (let i = 0; i < m; ++i) {
    if (obstacleGrid[i][0] === 1) {
      break;
    }
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; ++j) {
    if (obstacleGrid[0][j] === 1) {
      break;
    }
    dp[0][j] = 1;
  }
  
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      }
      else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
    }
  }
  return dp[m-1][n-1];
};