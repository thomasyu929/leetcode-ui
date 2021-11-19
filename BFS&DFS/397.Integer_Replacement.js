/**
 * @param {number} n
 * @return {number}
 */

// https://leetcode.com/problems/integer-replacement/

var integerReplacement = function(n) {
  if (n === 1) {
    return 0;
  }
  if (n % 2 === 0) {
    return 1 + integerReplacement(n / 2);
  }
  // n will be overflow when it's equal to 2^31 - 1
  return 2 + Math.min(integerReplacement(Math.floor(n / 2)), integerReplacement(Math.floor(n / 2 + 1)));
};