/**
 * @param {string} word
 * @return {number}
 */

// https://leetcode.com/problems/count-vowel-substrings-of-a-string/

var countVowelSubstrings = function(word) {
  vowels = 'aeiou';
  let s = new Set();
  let res = 0;
  for (let i = 0; i < word.length; ++i) {
    for (let j = i; j < word.length; ++j) {
      if (vowels.indexOf(word[j]) < 0) {
        break;
      }
      s.add(word[j]);
      if (s.size === 5) {
        res++;
      }
    }
    s.clear();
  }
  return res;
};