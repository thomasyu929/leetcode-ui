/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/single-number-ii/

 var singleNumber = function(nums) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    let total = 0;
    for (let num of nums) {
      total += (num >> i) & 1;
    }
    res |= (total % 3) << i;
  }
  
  return res;
};