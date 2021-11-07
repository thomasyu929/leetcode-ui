/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// https://leetcode.com/problems/multiply-strings/

// Time: O(m*n) Space: O(m+n);

// we multiply each pair (one from each number) of digits starting from left to right.

var multiply = function(num1, num2) {
  let m = num1.length,
      n = num2.length;
  let res = '',
      vals = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      let p1 = i + j;
      let p2 = i + j + 1;
      let val = (num1[i] - '0') * (num2[j] - '0');
      let sum = vals[p2] + val;
      vals[p1] += Math.floor(sum / 10);
      vals[p2] = sum % 10;
    }
  }
  for (let val of vals) {
    if (res.length || val !== 0) {
      res += val;
    }
  }
  
  return res.length ? res : '0';
};