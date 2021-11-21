/**
 * @param {number[]} colors
 * @return {number}
 */

// https://leetcode.com/problems/two-furthest-houses-with-different-colors/

var maxDistance = function(colors) {
  let res = 0;
  let n = colors.length;
  
  for (let i = 0; i < n; ++i) {
    for (let j = i; j < n; ++j) {
      if (colors[j] !== colors[i]) {
        res = Math.max(res, j - i);
      }
    }
  }
  
  return res;
};