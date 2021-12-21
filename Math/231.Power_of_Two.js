/**
 * @param {number} n
 * @return {boolean}
 */

// https://leetcode.com/problems/power-of-two/

var isPowerOfTwo = function(n) {
  if (n <= 0) {
    return false;
  }
  while (n !== 1) {
    let temp = Math.floor(n / 2);
    if (temp !== n / 2) {
      return false;
    }
    n = temp;
  }
  
  return true;
};