/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

// https://leetcode.com/problems/word-pattern/

var wordPattern = function(pattern, s) {
  let arr = s.split(' ');
  
  if (arr.length !== pattern.length) {
    return false;
  }
  
  let m = new Map();
  let ss = new Set();
  
  for (let i = 0; i < arr.length; ++i) {
    let c = pattern[i];
    if (m.get(c)) {
      if (m.get(c) !== arr[i]) {
        return false;
      }
    }
    else {
      if (ss.has(arr[i])) {
        return false;
      }
      m.set(c, arr[i]);
      ss.add(arr[i]);
    }
  }
  
  return true;
};