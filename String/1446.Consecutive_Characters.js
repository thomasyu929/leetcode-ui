/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode-cn.com/problems/consecutive-characters/

var maxPower = function(s) {
  let res = 0;
  let temp = 1;
  for (let i = 1; i < s.length; ++i) {
    if (s[i] === s[i-1]) {
      temp++;
    }
    else {
      res = Math.max(temp, res);
      temp = 1;
    }
  }

  return Math.max(temp, res);
};