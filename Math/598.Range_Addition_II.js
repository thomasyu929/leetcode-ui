/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */

// https://leetcode.com/problems/range-addition-ii/

var maxCount = function(m, n, ops) {
  for (let op of ops) {
    m = Math.min(m, op[0]);
    n = Math.min(n, op[1]);
  }
  // get the area of minimum height and width;
  return m * n;
};