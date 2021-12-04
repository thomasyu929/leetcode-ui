/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/ransom-note/

var canConstruct = function(ransomNote, magazine) {
  let m = {};
  
  for (let c of magazine) {
    m[c] = m[c] ? m[c]+1 : 1;
  }

  for (let c of ransomNote) {
    if (!m[c]) {
      return false;
    }
    m[c]--;
  }

  return true;
};