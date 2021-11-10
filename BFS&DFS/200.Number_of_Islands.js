/**
 * @param {character[][]} grid
 * @return {number}
 */

// https://leetcode.com/problems/number-of-islands/

 var numIslands = function(grid) {
  let visited = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(false));
  let res = 0;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] === '0' || visited[i][j]) {
        continue;
      }
      helper(grid, visited, i, j);
      res++;
    }
  }
  
  return res;
};

var helper = (grid, visited, i, j) => {
  if (i >= grid.length || i < 0 || j >= grid[0].length || j < 0 || grid[i][j] === '0' || visited[i][j]) {
    return;
  }
  visited[i][j] = true;
  helper(grid, visited, i - 1, j);
  helper(grid, visited, i + 1, j);
  helper(grid, visited, i, j - 1);
  helper(grid, visited, i, j + 1);
}