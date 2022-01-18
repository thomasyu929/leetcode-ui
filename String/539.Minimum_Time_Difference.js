/**
 * @param {string[]} timePoints
 * @return {number}
 */

// https://leetcode-cn.com/problems/minimum-time-difference/

var findMinDifference = function(timePoints) {
  timePoints = timePoints.map(time => {
    return +(time.slice(0, 2)) * 60 + +(time.slice(3));
  })

  timePoints.sort((a, b) => a - b);
  let res = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < timePoints.length; ++i) {
    res = Math.min(res, timePoints[i] - timePoints[i-1]);
  }

  return Math.min(res, 1440 + timePoints[0] - timePoints[timePoints.length - 1]);
};