/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

// var minStartValue = function(nums) {
//   let start = nums[0] > 0 ? 1 : 1 - nums[0]; 
//   let curr = nums[0] + start;
//   for (let i = 1; i < nums.length; ++i) {
//     if (curr + nums[i] < 1) {
//       start += 1 - curr - nums[i];
//       curr = 1;
//     }
//     else {
//       curr += nums[i];
//     }
//   }
//   return start;
// };

var minStartValue = function(nums) {
  // use one loop to get minimum value of sum, then we can get minimum positive start value
  let sum = 0;
  let min = Infinity;
  for (let num of nums) {
    sum += num;
    min = Math.min(min, sum);
  }
  
  return min < 0 ? 1 - min : 1;
}