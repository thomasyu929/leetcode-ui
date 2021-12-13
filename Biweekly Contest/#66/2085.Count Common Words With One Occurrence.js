/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */

// https://leetcode.com/contest/biweekly-contest-66/problems/count-common-words-with-one-occurrence/

var countWords = function(words1, words2) {
  let m = {};
  let res = 0;
  
  for (let word of words1) {
    m[word] = m[word] ? m[word]+1 : 1;
  }
  for (let word of words2) {
    m[word] = m[word] ? m[word] * 10 + 1 : 0;
  }
  for (let word of words1) {
    if (m[word] === 11) {
      res++;
    }
  }
  
  return res;
};