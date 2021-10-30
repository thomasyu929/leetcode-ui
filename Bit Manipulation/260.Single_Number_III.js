// https://leetcode.com/problems/single-number-iii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
  let diff = 0;
  let res = [0 , 0];
  for (let num of nums) {
    diff ^= num;
  }
  diff &= -diff;
  for (let num of nums) {
    if (num & diff) {
      res[0] ^= num;
    }
    else {
      res[1] ^= num;
    }
  }

  return res;
};