/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/find-the-duplicate-number/

// var findDuplicate = function(nums) {
//   let slow = 0,
//       fast = 0;
//   while (true) {
//     slow = nums[slow];
//     fast = nums[nums[fast]];
    
//     if (slow === fast) {
//       break;
//     }
//   }
  
//   fast = 0;
//   while (true) {
//     slow = nums[slow];
//     fast = nums[fast];
    
//     if (slow === fast) {
//       return fast;
//     }
//   }
// };

var findDuplicate = function(nums) {
  let left = 1,
      right = nums.length;
  while (left < right) {
    let mid = Math.floor((right - left) / 2) + left;
    let count = 0;
    for (let num of nums) {
      if (num <= mid) {
        count++;
      }
    }
    if (count > mid) {
      right = mid;
    }
    else {
      left = mid + 1;
    }
  }
  
  return right;
}