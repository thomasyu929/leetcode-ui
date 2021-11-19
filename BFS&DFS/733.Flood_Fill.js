/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
//https://leetcode.com/problems/flood-fill/
// DFS
// var floodFill = function(image, sr, sc, newColor) {
//   if (image[sr][sc] === newColor) {
//     return image;
//   }
//   helper(image, sr, sc, image[sr][sc], newColor);
//   return image;
// };

// var helper = function(image, x, y, color, newColor) {
//   let m = image.length;
//       n = image[0].length;
//   if (x >= m || y >= n || x < 0 || y < 0 || image[x][y] !== color) {
//     return;
//   }
//   let dirs = [[0,1], [0, -1], [1, 0], [-1, 0]];
//   image[x][y] = newColor;

//   helper(image, x+1, y, color, newColor);
//   helper(image, x-1, y, color, newColor);
//   helper(image, x, y+1, color, newColor);
//   helper(image, x, y-1, color, newColor);
// }

//BFS
var floodFill = function(image, sr, sc, newColor) {
  let m = image.length,
      n = image[0].length;
  let color = image[sr][sc];
  if (color === newColor) {
    return image;
  }
  let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let queue = [[sr, sc]];
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; ++i) {
      let [sx, sy] = queue.pop();
      image[sx][sy] = newColor;
      for (let dir of dirs) {
        let x = sx + dir[0],
            y = sy + dir[1];
        // if color already equal to newColor it will be infinity loop
        if (x >= m || x < 0 || y >= n || y < 0 || image[x][y] !== color) {
          continue;
        }
        queue.push([x, y]);
      }
    }
  }
  
  return image;
}