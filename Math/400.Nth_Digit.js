/**
 * @param {number} n
 * @return {number}
 */

// https://leetcode-cn.com/problems/nth-digit/

var findNthDigit = function(n) {
  let len = 1;

  // figure out which digital the n is (1 / 10 / 100 / 1000.....)
  while (len * 9 * Math.pow(10, len - 1) < n) {
    n -= len * 9 * Math.pow(10, len - 1);
    len++;
  }

  let base = Math.pow(10, len - 1);
  // -1 because 100 count 1 times
  let num = Math.floor(n / len) - 1 + base;
  // calc rest of n, because not all of calc is fully divide
  n -= (num - base + 1) * len;

  return n === 0 ? num % 10 : (Math.floor((num + 1) / Math.pow(10, len - n)) % 10);
};