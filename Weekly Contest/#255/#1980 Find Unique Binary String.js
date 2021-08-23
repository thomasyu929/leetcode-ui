/**
Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.
*/

var findDifferentBinaryString = function(nums) {  
  let res = "";
  for (let i = 0; i < nums.length; i++) {
    res += nums[i][i] === '0' ? '1' : '0';
  }
  
  return res;
};