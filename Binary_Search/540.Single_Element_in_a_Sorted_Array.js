/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/problems/single-element-in-a-sorted-array/

var singleNonDuplicate = function(nums) {
  let left = 0,
      right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid % 2) {
      // make mid be the index of first of two;
      mid--;
    }
    if (nums[mid] === nums[mid + 1]) {
      // plus 1 will cause infinity loop
      left = mid + 2;
    }
    else {
      right = mid;
    }
  }
  return nums[left];
};