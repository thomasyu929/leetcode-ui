/**
 * @param {string[]} words
 * @return {string}
 */

// https://leetcode.com/contest/weekly-contest-272/problems/find-first-palindromic-string-in-the-array/

var firstPalindrome = function(words) {
  for (let word of words) {
    if (helper(word)) {
      return word;
    }
  }
  
  return "";
};

var helper = function (s) {
  let left = 0, right = s.length - 1;
  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++, right--;
  }
  
  return true;
}