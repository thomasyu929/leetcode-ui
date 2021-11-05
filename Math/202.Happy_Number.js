/**
 * @param {number} n
 * @return {boolean}
 */

// https://leetcode.com/problems/happy-number

var isHappy = function(n) {
  let m = {n: 1};
  while (true) {
    n = (n.toString().split('')).reduce((a, b) => a + b * b, 0);
    if (n === 1) {
      return true;
    }
    if (m[n]) {
      return false;
    }
    else {
      m[n] = 1;
    }
  }
};