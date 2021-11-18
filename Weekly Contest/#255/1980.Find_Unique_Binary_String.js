/**
 * @param {string[]} nums
 * @return {string}
 */

// https://leetcode.com/problems/find-unique-binary-string/

var findDifferentBinaryString = function(nums) {  
  let res = "";
  for (let i = 0; i < nums.length; i++) {
    // make each position has different with binary string in nums in binary result 
    res += nums[i][i] === '0' ? '1' : '0';
  }
  return res;
};