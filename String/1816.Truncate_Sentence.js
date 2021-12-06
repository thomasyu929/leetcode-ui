/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// https://leetcode-cn.com/problems/truncate-sentence/

var truncateSentence = function(s, k) {
  s = s.split(' ');
  return s.slice(0, k).join(' ');
};