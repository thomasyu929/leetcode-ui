/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */

//https://leetcode.com/problems/interval-list-intersections/

var intervalIntersection = function(A, B) {
  let m = A.length,
      n = B.length;
  let i = 0, 
      j = 0;
  let res = [];
  
  while (i < m && j < n) {
    let low = Math.max(A[i][0], B[j][0]);
    let high = Math.min(A[i][1], B[j][1]);
    if (low <= high) {
      // that proof have no intersection
      res.push([low, high]);
    }
    A[i][1] > B[j][1] ? j++ : i++;
  }
  
  return res;
};