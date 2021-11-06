/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/find-the-duplicate-number/

var findDuplicate = function(nums) {
  let slow = 0,
      fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    
    if (slow === fast) {
      break;
    }
  }
  
  fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[fast];
    
    if (slow === fast) {
      return fast;
    }
  }
};