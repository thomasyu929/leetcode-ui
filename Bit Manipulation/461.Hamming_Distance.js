/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// https://leetcode.com/problems/hamming-distance/

var hammingDistance = function(x, y) {
  let binary = x ^ y;
  let res = 0;
  for (let i = 0; i < 32; ++i) {
    res += (binary >> i) & 1; 
  }
  // optimize solution: remove '1' in binary each time by:
  // binary & (binary - 1);
  
  return res
};