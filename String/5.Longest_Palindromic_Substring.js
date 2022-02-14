/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s;
  }
  let n = s.length;
  let maxLen = 0, start = 0;
  let i = 0;
  
  while (i < n) {
    if (n - i <= maxLen / 2) {
      break;
    }
    let left = i, right = i;
    
    while (right < n - 1 && s[left] === s[right+1]) {
      right++;
    }
    i = right + 1;
    
    while (left > 0 && right < n - 1 && s[left-1] === s[right+1]) {
      left--;
      right++;
    }
    
    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      start = left;
    }
  }
  
  return s.slice(start, start+maxLen);
};

