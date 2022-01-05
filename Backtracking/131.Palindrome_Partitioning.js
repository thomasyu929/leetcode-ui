/**
 * @param {string} s
 * @return {string[][]}
 */

// https://leetcode.com/problems/palindrome-partitioning/

var partition = function(s) {
  let res = [];
  helper(s, res, 0, []);
  return res;
};

var helper = function(s, res, index, path) {
  if (index === s.length) {
    res.push(path);
    return;
  }
  
  for (let i = index; i < s.length; ++i) {
    if (isPalindrome(s.slice(index, i+1))) {
      helper(s, res, i+1, [...path, s.slice(index, i+1)]);
    }
  }
}

var isPalindrome = function(s) {
  let left = 0, right = s.length-1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}