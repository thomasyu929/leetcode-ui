/**
 * @param {number} n
 * @return {number}
 */

//https://leetcode.com/problems/complement-of-base-10-integer/

var bitwiseComplement = function(n) {
  let x = 1;
  
  while (n > x) {
    x = x * 2 + 1; // 1...11...111...1111
  }
  
  return x - n;
};