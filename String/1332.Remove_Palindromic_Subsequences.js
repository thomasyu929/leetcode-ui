/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode-cn.com/problems/remove-palindromic-subsequences/

var removePalindromeSub = function(s) {
  let left = 0, right = s.length-1;
  
  while (left <= right) {
    if (s[left] !== s[right]) {
      return 2;
    }
    left++;
    right--;
  }
  
  return 1;
};