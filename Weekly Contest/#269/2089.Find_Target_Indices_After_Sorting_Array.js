/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// https://leetcode.com/problems/find-target-indices-after-sorting-array/

// var targetIndices = function(nums, target) {
//   nums.sort((a, b) => a - b);
//   let res = [];

//   for (let i = 0; i < nums.length; ++i) {
//     if (nums[i] === target) {
//       res.push(i);
//     }
//   }
  
//   return res;
// };

var targetIndices = function(nums, target) {
  let idx = 0,
      count = 0;
  let res = [];
  for (let num of nums) {
    if (num === target) {
      count++;
    }
    else if (num < target) {
      idx++;
    }
  }
  
  while (count--) {
    res.push(idx++);
  }
  
  return res;
}