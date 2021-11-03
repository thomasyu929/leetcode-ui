/**
 * @param {number[][]} grid
 * @return {number}
 */

// https://leetcode.com/problems/unique-paths-iii/

var uniquePathsIII = function(grid) {
  let m = grid.length,
      n = grid[0].length;
      xs = 0,
      ys = 0,
      target = 1,
      res = [0];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === 1) {
        xs = i, ys = j;
      }
      else if (grid[i][j] === 0) {
        target++;
      }
    }
  }
  
  helper(grid, xs, ys, target, res);
  return res;
};

var helper = (grid, x, y, target, res) => {
  let m = grid.length,
      n = grid[0].length;
  if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] < 0) {
    return;
  };
  if (grid[x][y] === 2) {
    if (target === 0) {
      res[0]++;
    }
    return;
  }
  grid[x][y] = -2
  target--;
  helper(grid, x-1, y, target, res);
  helper(grid, x, y-1, target, res);
  helper(grid, x+1, y, target, res);
  helper(grid, x, y+1, target, res);
  target++;
  grid[x][y] = 0;
}