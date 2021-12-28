/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */

// https://leetcode.com/contest/biweekly-contest-68/problems/check-if-a-parentheses-string-can-be-valid/

var canBeValid = function(s, locked) {
  let n = s.length;
  
  if (n % 2) {
    return false;
  }
  
  let wild = 0, lp = 0, rp = 0;
  
  for (let i = 0; i < n; ++i) {
    if (locked[i] === '0') {
      wild++;
    }
    else if (s[i] === '(') {
      lp++;
    }
    else if (s[i] === ')') {
      rp++;
    }
    if (wild + lp - rp < 0) {
      return false;
    }
  }
  
  wild = 0, lp = 0, rp = 0;
  for (let i = n-1; i >= 0; --i) {
    if (locked[i] === '0') {
      wild++;
    }
    else if (s[i] === '(') {
      lp++;
    }
    else if (s[i] === ')') {
      rp++;
    }
    if (wild - lp + rp < 0) {
      return false;
    }
  }
  
  return true
};