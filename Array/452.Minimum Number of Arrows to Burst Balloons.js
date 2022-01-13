/**
 * @param {number[][]} points
 * @return {number}
 */

// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/

var findMinArrowShots = function(points) {
  points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  
  let res = 1; end = points[0][1];
  
  for (let i = 1; i < points.length; ++i) {
    if (end >= points[i][0]) {
      end = Math.min(end, points[i][1]);
    }
    else {
      res++;
      end = points[i][1];
    }
  }
  
  return res;
};