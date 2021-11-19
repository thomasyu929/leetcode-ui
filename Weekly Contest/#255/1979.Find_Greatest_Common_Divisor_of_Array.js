/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/find-greatest-common-divisor-of-array/

var findGCD = function(nums) {
  let min = Math.min(...nums),
      max = Math.max(...nums);
  
  while (min) {
    let temp = min;
    min = max % min;
    max = temp;
  }
  
  return max;
};