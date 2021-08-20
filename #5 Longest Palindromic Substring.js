/**
Given a string s, return the longest palindromic substring in s.
*/

var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let start = 0,
    maxLen = 0,
    i = 0;

  while (i < s.length) {
    if (s.length - i <= maxLen / 2) break;
    let left = i,
      right = i;

    while (right < s.length - 1 && s[left] === s[right + 1]) ++right;
    i = right + 1;

    while (right < s.length && left >= 0 && s[left] === s[right]) {
      left--;
      right++;
    }

    if (maxLen < right - left - 1) {
      maxLen = right - left - 1;
      start = left + 1;
    }
  }

  return s.slice(start, start + maxLen);
};