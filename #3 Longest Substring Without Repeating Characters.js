/**
Given a string s, find the length of the longest substring without repeating characters.
*/

var lengthOfLongestSubstring = function(s) {
  let res = 0;
  let left = -1;
  let m = new Map();
  
  for (let i = 0; i < s.length; ++i) {
    if (m.has(s[i]) && m.get(s[i]) > left) {
      left = m.get(s[i]);
    }
    m.set(s[i], i);
    res = Math.max(res, i - left)
  }
  
  return res;
  
};