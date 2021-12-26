/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */

// https://leetcode-cn.com/problems/occurrences-after-bigram/

var findOcurrences = function(text, first, second) {
  let res = [];
  let arr = text.split(' ');
  if (arr.length < 3) {
    return [];
  }
  for (let i = 2; i < arr.length; ++i) {
    if (arr[i-2] === first && arr[i-1] === second) {
      res.push(arr[i]);
    }

  }

  return res;
};