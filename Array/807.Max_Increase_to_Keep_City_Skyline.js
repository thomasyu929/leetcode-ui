/**
 * @param {number[][]} grid
 * @return {number}
 */

// https://leetcode-cn.com/problems/max-increase-to-keep-city-skyline/

var maxIncreaseKeepingSkyline = function(grid) {
  let m = grid.length, n = grid[0].length;
  let row = new Array(m).fill(0);
  let col = new Array(n).fill(0);

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      row[i] = Math.max(row[i], grid[i][j]);
      col[j] = Math.max(col[j], grid[i][j]);
    }
  }
  let res = 0;

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      let temp = Math.min(row[i], col[j]);
      if (grid[i][j] < temp) {
        res += temp - grid[i][j];
      }
    }
  }

  return res;
};