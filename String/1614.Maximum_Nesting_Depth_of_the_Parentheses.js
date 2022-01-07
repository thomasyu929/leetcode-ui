/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode-cn.com/problems/maximum-nesting-depth-of-the-parentheses/

var maxDepth = function(s) {
  let res = 0;
  for (let i = 0, count = 0; i < s.length; ++i) {
    if (s[i] === '(') {
      count++;
    }
    else if (s[i] === ')') {
      count--;
    }
    res = Math.max(res, count);
  }

  return res;
};