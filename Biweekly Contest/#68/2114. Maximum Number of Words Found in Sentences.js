/**
 * @param {string[]} sentences
 * @return {number}
 */

// https://leetcode.com/contest/biweekly-contest-68/problems/maximum-number-of-words-found-in-sentences/

var mostWordsFound = function(sentences) {
  let res = 0;
  
  for (let s of sentences) {
    res = Math.max(res, s.split(' ').length);  
  }
  
  return res;
};