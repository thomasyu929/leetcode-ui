/**
 * @param {number[]} nums
 * @return {string[]}
 */

// https://leetcode.com/problems/summary-ranges/

var summaryRanges = function(nums) {
  let res = [];
  let i = 0;
  while (i < nums.length) {
    let path = [nums[i]];
    while (i < nums.length - 1 && nums[i] + 1 === nums[i+1]) {
      path[1] = nums[i+1];
      i++;
    }
    i++;
    res.push(path.join('->'));
  }
  
  return res;
};