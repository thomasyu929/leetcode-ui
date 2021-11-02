/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// var removeDuplicates = function(nums) {
//   // It does not matter what you leave beyond the first k elements.
//   // use two pointers;
//   if (nums.length < 1) {
//     return nums;
//   }
//   let res = 1;
//   let slow = 0, 
//       fast = 1;
//   while (fast < nums.length) {
//     if (nums[slow] !== nums[fast]) {
//       slow++;
//       nums[slow] = nums[fast];
//       res++;
//     }
//     fast++;
//   }
  
//   return res;
// };


var removeDuplicates = function(nums) {
  let prev = 0,
      curr = 0,
      n = nums.length;
  
  while (curr < n) {
    if (nums[prev] === nums[curr]) {
      curr++;
    }
    else {
      nums[++prev] = nums[curr];
    }
  }
  
  return n ? prev + 1 : 0;
}