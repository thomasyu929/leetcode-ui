/**
 * @param {number[]} arr
 * @return {number[][]}
 */

// https://leetcode.com/problems/minimum-absolute-difference/

var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b);
  res = [];
  let min = Number.MAX_VALUE;
  
  for (let i = 1; i < arr.length; ++i) {
    let diff = arr[i] - arr[i-1];
    if (min > diff) {
      res = [[arr[i-1], arr[i]]];
      min = diff;
    }
    else if (min === diff) {
      res.push([arr[i-1], arr[i]])
    }
  }
  
  return res;
};