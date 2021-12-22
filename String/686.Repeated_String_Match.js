/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

// https://leetcode-cn.com/problems/repeated-string-match/

var repeatedStringMatch = function(a, b) {
  let m = a.length, n = b.length;

  let res = Math.ceil(n / m);

  let as = a.repeat(res + 1);

  for (let i = 0; i <= as.length - n; i++) {
    let temp = as.substring(i, n + i);
    if (temp === b) {
      return i <= res * m - n ? res : res + 1;
    }
  }

  return -1;
};