/**
 * @param {string[]} words
 * @return {number}
 */

// https://leetcode.com/problems/maximum-product-of-word-lengths/

var maxProduct = function(words) {
  let n = words.length;
  let mask = new Array(n).fill(0);
  let res = 0;

  for (let i = 0; i < n; ++i) {
    for (let c of words[i]) {
      mask[i] |= 1 << c.charCodeAt() - 'a'.charCodeAt();
    }

    for (let j = 0; j < i; ++j) {
      if (!(mask[i] & mask[j])) {
        res = Math.max(res, words[i].length * words[j].length);
      }
    }
  }

  return res;
};