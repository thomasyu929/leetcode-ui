/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */

// https://leetcode-cn.com/problems/coloring-a-border/

var colorBorder = function(grid, row, col, color) {
  helper(grid, row, col, grid[row][col]);
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] < 0) {
        grid[i][j] = color;
      }
    }
  }

  return grid;
};

var helper = (grid, x, y, target) => {
  let m = grid.length, n = grid[0].length;
  if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] !== target)  {
    return;
  }
  grid[x][y] = -target;
  helper(grid, x-1, y, target);
  helper(grid, x+1, y, target);
  helper(grid, x, y-1, target);
  helper(grid, x, y+1, target);
  if (x > 0 && x < m - 1 && y > 0 && y < n - 1 && target == Math.abs(grid[x - 1][y]) && target == Math.abs(grid[x + 1][y]) && target == Math.abs(grid[x][y - 1]) && target == Math.abs(grid[x][y + 1])) {
    grid[x][y] = target;
  }
}