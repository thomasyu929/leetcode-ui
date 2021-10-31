/**
 * @param {number[]} nums
 * @return {number[]}
 */

// https://leetcode.com/problems/next-greater-element-ii/

var nextGreaterElements = function(nums) {
  let res = new Array(nums.length).fill(-1);
  let stack = [];
  for (let i = 0; i < nums.length * 2; ++i) {
    let num = nums[i % nums.length];
    
    // return next greater number not smallest greater number
    while (stack.length && nums[stack[stack.length - 1]] < num) {
      let index = stack.pop();
      res[index] = num;
    }
    if (i < nums.length) {
      stack.push(i)
    }
  }
  
  return res;
};